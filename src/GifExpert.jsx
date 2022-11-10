import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { getGifs } from './helpers/getGifs'
const DEFAULT_CATEGORY = 'Trending'
let observer
let page = 0
function GifExpert() {
  const [lastCategory, setLastCategory] = useState(null)
  const [newPage, setNewPage] = useState(false)
  const [gifs, setGifs] = useState(null)
  const prevCat = useRef(null)
  const refItem = useRef(null)

  const onAddCategory = (newCategory) => {
    setLastCategory(newCategory)
    page = 0
    setGifs([])
  }

  useEffect(() => {
    if (!observer && refItem.current) {
      console.log('observer', refItem)
      observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(function (entry) {
            setNewPage(entry.isIntersecting)
          })
        },
        {
          rootMargin: '200px'
        }
      )

      observer.observe(refItem.current)
    }
    if (!gifs && page === 0) {
      getGifs(DEFAULT_CATEGORY, page).then(({ data, total_count }) => {
        setGifs(data)
      })
      page += 50
      return
    }
    if (newPage) {
      getGifs(lastCategory || DEFAULT_CATEGORY, page).then(
        ({ data, total_count }) => {
          setGifs((p) => [...p, ...data])
        }
      )
      page += 50
    }
  }, [lastCategory, refItem.current, newPage])

  return (
    <Box minHeight={'100vh'}>
      <Box bg='gray.50' borderBottom={'1px solid'} borderColor={'gray.200'}>
        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          paddingInline={5}
          paddingBlock={3}
          mx={'auto'}
        >
          <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize='2xl'
            fontWeight='extrabold'
          >
            GifsMasonry
          </Text>
          <AddCategory onNewCategory={onAddCategory} />
          <Box width={'110px'} />
        </Flex>
      </Box>
      <Box mt='5' padding={4} mx={'auto'}>
        <GifGrid category={lastCategory || DEFAULT_CATEGORY} gifs={gifs} />
      </Box>
      {<div ref={refItem}></div>}
    </Box>
  )
}

export default GifExpert
