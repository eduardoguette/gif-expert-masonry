import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { Masonry } from './Masonry'

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs(category).then((data) => setGifs(data))
  }, [])
  return (
    <Box fontWeight={600}>
      <Flex alignItems='center' gap='2'> 
        <Text
          fontSize='2rem'
          bgGradient='linear(to-r, #7928CA,#ff50cd)'
          bgClip='text'
          mb={2}
          textTransform='uppercase'
          fontWeight='bold'
        >
          {category}
        </Text>
      </Flex>

      <Masonry columns='4' spacing='2' items={gifs} />
    </Box>
  )
}
