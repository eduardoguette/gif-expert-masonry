import { Search2Icon } from '@chakra-ui/icons'
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
} from '@chakra-ui/react'
import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }
  const onAddCategory = () => {
    const value = inputValue.trim()
    if (value.length <= 1) return
    onNewCategory(inputValue)
    setInputValue('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputValue.trim()
    if (value.length <= 1) return
    onNewCategory(inputValue)
    setInputValue('')
  }

  return (
    <Container maxW='400px' mt='2'>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type='text'
            value={inputValue}
            onChange={handleChange}
            placeholder='Search GIPHY'
            focusBorderColor={'purple.300'}
            paddingInlineEnd={'3rem'}
          />
          <InputLeftElement children={<Search2Icon />} />
          <InputRightElement width={'4rem'}>
            <Button
              size={'xs'}
              bg='transparent'
              _hover={{ bg: 'purple.600' }}
              _active={{ bg: 'purple.900' }}
              color='#fafafa'
              mr={2}
              h='1.75rem'
              onClick={onAddCategory}
            >
              Buscar
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Container>
  )
}
