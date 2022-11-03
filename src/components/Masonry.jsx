import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MasonryElement } from './MasonryElement'
//import { MasonryElement } from './MasonryElement'
let numberColums = 0
export const Masonry = ({ columns, spacing, items }) => {
  const [itemsForMasonry, setItemsForMasonry] = useState(null)
  let column = columns
  if (columns > 5) {
    throw new Error('Error in number of columns parameter ')
  }
  if (window.matchMedia('(min-width: 1024px)').matches) {
    column = columns > 3 && columns
  } else if (window.matchMedia('(min-width: 800px)').matches) {
    column = columns > 2 && 3
  } else if (window.matchMedia('(min-width: 400px)').matches) {
    column = columns > 1 && 2
  } else {
    column = 1
  }
  useEffect(() => {
    setItemsForMasonry(
      items.map((item) => {
        numberColums++
        if (numberColums > parseInt(columns)) {
          numberColums = 1
        }
        return {
          ...item,
          idMasonry: numberColums
        }
      })
    )
  }, [items, column])

  return (
    <Flex gap={spacing} mx='auto'>
      {itemsForMasonry &&
        Array.from({ length: column }).map((_, index) => {
          return (
            <MasonryElement
              id={parseInt(index) + 1}
              key={index}
              spacing={spacing}
              elements={itemsForMasonry}
            />
          )
        })}
    </Flex>
  )
}

/* 

Array.from({ length: columns }).map((_, index) => <p>{index}</p>
{items.map((item) => (
   <Flex key={item.id} direction='col' width={'100%'}>
     <Image
       key={item.id}
       src={item.url}
       width='350px'
       fallbackSrc='https://i.imgur.com/nX8HUW9.gif'
     />
   </Flex>
 ))} */
