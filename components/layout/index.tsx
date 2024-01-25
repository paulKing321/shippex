import { Box } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar';
import React from 'react';
import { useRouter } from 'next/router';

interface SharedLayoutProps {
  children: React.ReactNode;
}


export const SharedLayout = ({ children }: SharedLayoutProps) => {
  const router = useRouter();
  return (
    <Box style={{background: "white"}}>
      {router.pathname !== '/dashboard' && <Navbar />}
      {children}
    </Box>
  );
};