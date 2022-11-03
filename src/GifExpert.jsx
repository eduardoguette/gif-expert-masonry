import { Box, Center, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

function GifExpert() {
  const [categories, setCategories] = useState([])
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories((p) => [newCategory, ...p])
  }
  return (
    <Box bg='rgb(18,18,18)' minHeight={'100vh'} color='#fff' p='10'>
      {/* Título */}
      <Center>
        <Text
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          GifExpert
        </Text>
      </Center>
      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Listados de Gif*/}
      <Box mt='10'>
        {categories.length >= 1 &&
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
      </Box>
    </Box>
  )
}

export default GifExpert
