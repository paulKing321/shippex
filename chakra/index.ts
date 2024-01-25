import { theme as Theme, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    xs: '480px',
    sm: '600px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  },
  fonts: {
    Heading: `Inter ${Theme.fonts.body}`,
    body: `Inter, ${Theme.fonts.body}`,
  },

  shadows: {
    shadow: '0px 3px 10px  rgba(0,0,0,0.2)',
  }

});

export default theme;