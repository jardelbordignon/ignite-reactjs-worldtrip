import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    dark: {
      primary: '#000',
      secondary: '#fff',
      text: '#47585B',
      info: '#999',
    },
    light: {
      primary: '#fff',
      secondary: '#000',
      text: '#F5F8FA',
      info: '#DADADA',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
    global: {
      body: {
        bg: '#fff',
        color: '#47585B',
        fontFamily: 'Poppins'
      }
    }
  }
})
