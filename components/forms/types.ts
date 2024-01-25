import { FormLabelProps, InputProps, RadioGroupProps, RadioProps, SelectProps } from '@chakra-ui/react';

export interface IInputProps extends InputProps {
  label?: string;
  labelStyles?: FormLabelProps;
  errorMessage?: string;
  leftSymbol?: any;
  rightSymbol?: any;
  symLeftFunction?: any;
  symRightFunction?: any;
  isLoading?: boolean;
}

export interface ISelectComponent<TValue extends number | string> extends SelectProps, Pick<IInputProps, 'label' | 'labelStyles' | 'errorMessage'> {
  options: Array<{ value: TValue; label: string }>;
}