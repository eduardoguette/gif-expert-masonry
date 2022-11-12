import { Container, Row, Text } from '@nextui-org/react'
import { useEffect, useRef, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import { getGifs } from './helpers/getGifs'

const DEFAULT_CATEGORY = 'Trending'
let observer
let page = 0
export default function GifExpert ({ setDarkMode }) {
  const [lastCategory, setLastCategory] = useState(null)
  const [newPage, setNewPage] = useState(false)
  const [gifs, setGifs] = useState(null)
  const refItem = useRef(null)
  const onAddCategory = (newCategory) => {
    setLastCategory(newCategory)
    page = 0
    setGifs([])
  }

  useEffect(() => {
    if (!observer && refItem.current) {
      createObserver(setNewPage, refItem)
    }
    if (!gifs && page === 0) {
      getGifs(DEFAULT_CATEGORY, page).then(({ data, totalCount }) => {
        setGifs(data)
      })
      page += 50
      return
    }
    if (newPage && gifs) {
      getGifs(lastCategory || DEFAULT_CATEGORY, page).then(
        ({ data, totalCount }) => {
          setGifs((p) => [...p, ...data])
        }
      )
      page += 50
    }
  }, [lastCategory, refItem.current, newPage])

  return (
    <Container
      aria-describedby='Main'
      css={{ paddingBlock: '1rem' }}
    >
      <Row
        align='center'
        css={{
          flexDirection: 'column',
          gap: '1rem',
          padding: 0,
          '@xs': { flexDirection: 'row', justifyContent: 'space-between' }
        }}
      >
        <Text
          css={{
            textGradient: '45deg, $blue800 -20%, $pink700 50%',
            paddingInline: '.8rem',
            margin: 0
          }}
          h1
          weight='extrabold'
        >
          GifsMasonry
        </Text>
        <AddCategory onNewCategory={onAddCategory} />
      </Row>
      <Row>
        <GifGrid gifs={gifs} />
      </Row>
      <div ref={refItem} />
    </Container>
  )
}
function createObserver (setNewPage, refItem) {
  // eslint-disable-next-line no-undef
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
