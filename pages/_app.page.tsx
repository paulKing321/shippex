import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import { AppPropsWithLayout } from '../@types';
import theme from '../chakra';
import { ToastContainer } from '../components/alerts/ToastContainer';
import { SharedLayout } from '../components/layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const muiTheme = createTheme({
  spacing: 8,
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
          <ThemeProvider theme={muiTheme}>
        <ChakraProvider theme={theme}>
            <SharedLayout>
              <Component {...pageProps} />
            </SharedLayout>
        </ChakraProvider>
          <ToastContainer />
          </ThemeProvider>
    </>
  );
}

export default MyApp;
