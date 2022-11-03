import { Flex, Image } from "@chakra-ui/react"

let idMasonry = 1
export const MasonryElement = ({id, elements, spacing }) => {
  return (
    <Flex flexDirection='column' gap={spacing} data-id={id}>
      {elements.map((item) => {
        if (idMasonry === 3) {
          idMasonry = 1
        }
        if (id === item.idMasonry) {
          return (
            <Image 
              key={item.id}
              src={item.url}
              height={"auto"} 
              fallbackSrc='https://i.imgur.com/nX8HUW9.gif'
            />
          )
        }
        idMasonry++
      })}
    </Flex>
  )
}
