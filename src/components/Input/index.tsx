import React from 'react';

import { TextInputProps } from 'react-native';
import { Container, Label, InputText } from './styles';

export type InputProps = TextInputProps & {
  label?: string;
  value?: string;
}

export function Input({ label, value, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText
        value={value}
        {...rest}
      />
    </Container>
  );
}