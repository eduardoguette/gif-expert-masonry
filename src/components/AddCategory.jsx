
import { Input } from '@nextui-org/react'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = inputValue.trim()
    if (value.length <= 1) return
    onNewCategory(inputValue)
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <Input
        css={{
          padding: 0,
          marginInline: 'auto'
        }}
        width='300px'
        aria-label='Buscar un Gif'
        bordered
        clearable
        type='text'
        value={inputValue}
        onChange={handleChange}
        placeholder='Search Gif'
      />

    </form>
  )
}
