
import { Container } from '@nextui-org/react'
import { Masonry } from './Masonry'

export const GifGrid = ({ gifs }) => {
  return (
    <Container css={{ marginTop: '1rem', padding: '0' }}>
      {gifs && <Masonry columns='4' spacing='.5rem' items={gifs} />}
    </Container>
  )
}
