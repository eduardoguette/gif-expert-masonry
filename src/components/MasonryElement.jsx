import { Flex, Image } from '@chakra-ui/react'

let idMasonry = 1
export const MasonryElement = ({ id, items, spacing, column }) => { 
  return (
    <Flex flexDirection='column' gap={spacing} data-id={id} width={'100%'}>
      {items.map((item, indx) => {
        if (idMasonry === 3) {
          idMasonry = 1
        }
        if (id === item.idMasonry) {
          return (
            <Image
              key={item.id+indx}
              src={item.url}
              height={'auto'} 
              fallbackSrc='https://i.imgur.com/nX8HUW9.gif'
            />
          )
        }
        idMasonry++
      })}
    </Flex>
  )
}
