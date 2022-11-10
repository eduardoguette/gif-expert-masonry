import { SearchIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  Input,
  InputGroup,
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
    <Flex >
      <form onSubmit={handleSubmit}>
        <InputGroup maxW='400px' borderRadius='full' alignItems={'center'}>
          <Input
            type='text'
            value={inputValue}
            rounded='full'
            onChange={handleChange}
            placeholder='Search Gif'
            focusBorderColor={'purple.300'}
            paddingInlineEnd={'3rem'}
            fontSize={'.95rem'}
            size={'lg'}
            width='lg'
            bg={'white'}
          />
          <InputRightElement right={0}  height='full'    bottom='0' my={'auto'} borderLeft={'1px solid'} borderColor={'gray.200 '} w='16' h={'95%'}>
            <Button 
              borderRadius={'0 100px 100px 0'}
              bg='transparent'
              _hover={{ bg: 'gray.200'}}
              _active={{ bg: 'gray.200'}}
              onClick={onAddCategory}
              h='full'
              display={'block'} 
              w="100%"
            >
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Flex>
  )
}
