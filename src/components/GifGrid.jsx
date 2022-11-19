import { Container } from '@nextui-org/react'
import { useRef } from 'react'
import { useGifs } from '../hooks/useGifs'
import { useObserver } from '../hooks/useObserver'
import { Masonry } from './Masonry'

export const GifGrid = ({ category }) => {
  const refItem = useRef(null)
  const { isIntersecting } = useObserver(refItem)
  const { gifs, isLoading } = useGifs(category, isIntersecting)
  return (
    <section style={{ marginTop: '1rem' }}>
      {!isLoading && (
        <Masonry columns='4' spacing='.5rem' items={gifs} />
      )}
      <Container
        css={{
          height: '200px'
        }} ref={refItem}
      />

    </section>
  )
}
