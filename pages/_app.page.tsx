import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router';
import { AppPropsWithLayout } from '../@types';
import theme from '../chakra';
import { ToastContainer } from '../components/alerts/ToastContainer';
import { SharedLayout } from '../components/layout';


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
        <ChakraProvider theme={theme}>
              <SharedLayout>
                <Component {...pageProps} />
              </SharedLayout>
          <ToastContainer />
        </ChakraProvider>
    </>
  );
}

export default MyApp;
