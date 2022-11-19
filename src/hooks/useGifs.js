import { useEffect, useRef, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
let page = 0
export const useGifs = (category, isIntersecting) => {
  const [gifs, setGifs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [maxNumber, setMaxNumber] = useState(0)

  const refCategory = useRef(category)

  const getImages = async () => {
    if (!gifs || refCategory.current !== category) {
      page = 0
      setMaxNumber(0)
      const { data, totalCount } = await getGifs(category, page)
      setMaxNumber(totalCount)
      setGifs((p) => [...data])
    } else {
      if (maxNumber > 50) { page += 50 }
      if (gifs.length >= maxNumber) return
      const { data, totalCount } = await getGifs(category, page)
      setMaxNumber(totalCount)
      setGifs((p) => [...p, ...data])
    }
    refCategory.current = category
    setIsLoading(false)
  }
  useEffect(() => {
    if ((!gifs || isIntersecting || refCategory.current !== category) && page <= maxNumber) {
      getImages()
    }
  }, [isIntersecting, category])
  return { gifs, isLoading, page }
}
