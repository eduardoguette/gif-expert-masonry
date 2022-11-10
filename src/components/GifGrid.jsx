import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Masonry } from './Masonry'

let observer = null

export const GifGrid = ({ category, gifs }) => {
  const [avatarFind, setAvatarFind] = useState(null)

  useEffect(() => {  
    if (!avatarFind && gifs)
      setAvatarFind(gifs[Math.floor(Math.random() * gifs.length)])
  }, [gifs, category])

  return (
    <Box fontWeight={600}>
      <Flex alignItems='center' gap='4' my={2}>
        <Box
          height={24}
          width={24}
          bg={'gray.100'}
          border={'1px solid'}
          borderColor={'gray.200'}
          display={'grid'}
          placeContent='center'
          rounded={'full'}
          overflow='hidden'
        >
          {avatarFind && (
            <Image
              src={avatarFind.url}
              alt={avatarFind.title}
              height='100px'
              width='100px'
            />
          )}
        </Box>
        <Flex direction={'column'}>
          <Text fontSize={'x-large'} fontWeight={'bold'} mb='1'>
            {category === 'Trending' ? 'Trending Gifs' : category}
          </Text>

          <Button size={'sm'} bg={'purple.500'} color={'white'}>
            Seguir
          </Button>
        </Flex>
      </Flex>
      {gifs && <Masonry columns='4' spacing='2' items={gifs} />}
    </Box>
  )
}
