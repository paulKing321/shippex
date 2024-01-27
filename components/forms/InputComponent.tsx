import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Icon, HStack, Spinner, InputLeftElement } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { IInputProps } from './types';

export const InputComponent = forwardRef<HTMLInputElement, IInputProps>(({ label, errorMessage, leftSymbol, symLeftFunction, rightSymbol, symRightFunction, labelStyles, isLoading, ...rest }, ref) => {
  const { id, variant = 'outline' } = rest;

  return (
    <FormControl isInvalid={!!errorMessage} w="100%">
      {label && (
        <FormLabel fontWeight="600" fontSize="12px" lineHeight="20px" color="secondary.900" htmlFor={id} {...labelStyles}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <InputLeftElement cursor="pointer">{leftSymbol && <Icon as={leftSymbol} onClick={symLeftFunction} />}</InputLeftElement>
        <Input ref={ref} variant={variant} {...rest} autoComplete="off" />
        <InputRightElement cursor="pointer">{rightSymbol && <Icon as={rightSymbol} onClick={symRightFunction} />}</InputRightElement>
      </InputGroup>
      <HStack w="full" justifyContent="space-between" alignItems="center">
        {isLoading && <Spinner size="sm" color="primary.400" />}
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </HStack>
    </FormControl>
  );
});

InputComponent.displayName = 'InputComponent';
