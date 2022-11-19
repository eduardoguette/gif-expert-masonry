import { createTheme, NextUIProvider } from '@nextui-org/react'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpert from './GifExpert'
import './index.css'

const lightTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {}
  }
})
const darkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {},
    space: {},
    fonts: {}
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextThemesProvider
    defaultTheme='system'
    attribute='class'
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider theme={{ darkTheme, lightTheme }}>

      <GifExpert />
    </NextUIProvider>
  </NextThemesProvider>
)
