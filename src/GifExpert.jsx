import { Button, Row, Text } from '@nextui-org/react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export default function GifExpert () {
  const [category, setCategory] = useState('Trending Gif')

  const onAddCategory = (newCategory) => {
    setCategory(newCategory)
  }

  return (
    <main aria-describedby='Main' style={{ padding: '1rem' }}>
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
        <GifGrid category={category} />
      </Row>
      <Button.Group shadow color='gradient' auto>
        <Button
          onPress={() => window.scrollTo(0, 0)}
          css={{
            position: 'fixed',
            zIndex: 2,
            bottom: '2rem',
            right: '2rem',
            height: 'max-content',
            padding: '16px',
            display: 'grid',
            placeItems: 'center',
            borderRadius: '100px',
            border: 0
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z'
              fill='rgba(255,255,255,1)'
            />
          </svg>
        </Button>
      </Button.Group>
    </main>
  )
}
