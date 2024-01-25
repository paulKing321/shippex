import { Box } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar';
import React from 'react';

interface SharedLayoutProps {
  children: React.ReactNode;
}


export const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <Box style={{background: "white"}}>
      <Navbar />
      {children}
    </Box>
  );
};