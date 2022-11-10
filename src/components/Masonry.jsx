import { Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MasonryElement } from './MasonryElement'

let numberColums = 0
export const Masonry = ({ columns, spacing, items }) => {
  const [itemsForMasonry, setItemsForMasonry] = useState(null)
  let column = detectNumberColumns(columns) 
  //console.log(items)
  useEffect(() => {
    setItemsForMasonry(
      items.map((item) => {
        numberColums++
        if (numberColums > parseInt(column)) {
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
    <Grid gap={spacing} mx='auto' templateColumns={`repeat(${column},minmax(min(300px,100%),1fr))`}>
      {itemsForMasonry &&
        Array.from({ length: column }).map((_, index) => {
          return (
            <MasonryElement
              column={column}
              id={parseInt(index) + 1}
              key={index}
              spacing={spacing}
              items={itemsForMasonry}
            />
          )
        })}
    </Grid>
  )
}

function detectNumberColumns(columns) {
  let column = 1
  if (columns >= 5) {
    throw new Error('Error in number of columns parameter ')
  }
  if (window.matchMedia('(min-width: 1200px)').matches) {
    column = columns
  } else if (window.matchMedia('(min-width: 900px)').matches) {
    column = 3
  } else if (window.matchMedia('(min-width: 600px)').matches) {
    column = 2
  } 
  return column
}
 
