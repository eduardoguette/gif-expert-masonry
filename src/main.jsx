import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpert from './GifExpert'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    {/* <React.StrictMode> */}
    <GifExpert />
  </ChakraProvider>
  /*  </React.StrictMode> */
)
