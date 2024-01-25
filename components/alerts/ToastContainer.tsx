import theme from '../../chakra';
import { createStandaloneToast } from '@chakra-ui/react';

export const { toast, ToastContainer } = createStandaloneToast({ theme });

export function ToastMessage(description: string, status: 'success' | 'error' | 'warning' | 'info', duration?: number | 3000, isClosable?: boolean | true) {
  return toast({
    description,
    status,
    duration,
    isClosable,
    position: 'top',
  });
}