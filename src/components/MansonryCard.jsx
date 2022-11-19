import { Container, Image, Text } from '@nextui-org/react'
import React, { useState } from 'react'

export const MansonryCard = ({ item, spacing }) => {
  const [copied, setCopied] = useState(false)
  const copyGif = (id) => {
    const urlCopy = `https://media.giphy.com/media/${id}/giphy.gif`
    setCopied(true)
    setTimeout(async () => {
      setCopied(false)
      await navigator.clipboard.writeText(urlCopy)
      return await navigator.clipboard.readText()
    }, 1000)
  }
  return (
    <Container
      css={{
        margin: 0,
        padding: 0,
        paddingBottom: spacing,
        position: 'relative'
      }}
    >
      <Image
        src={item.url}
        objectFit='cover'
        css={{
          width: '100%'
        }}
        data-image-id={item.id}
        onClick={() => copyGif(item.id)}
      />
      {copied && (
        <Container
          css={{
            position: 'absolute',
            zIndex: 1,
            display: 'grid',
            placeContent: 'center',
            inset: 0,
            background: 'rgba(255,255,255,.4)',
            backdropFilter: 'blur(5px)'
          }}
        >
          <Text
            weight='bold' css={{
              background: 'rgba(27, 27, 27, 0.6)',
              backdropFilter: 'blur(5px)',
              padding: '.3rem 1.1rem',
              borderRadius: '5px',
              color: 'White'
            }}
          >
            Copied!
          </Text>
        </Container>
      )}
    </Container>
  )
}
