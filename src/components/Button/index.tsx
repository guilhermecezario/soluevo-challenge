import React from 'react';

import { TextInputProps, TouchableOpacityProps } from 'react-native';
import { Container, Text } from './styles';

export type InputProps = TouchableOpacityProps & {
  text?: string;
}

export function Button({ text, ...rest }: InputProps) {
  return (
    <Container {...rest}>
      <Text>{text}</Text>
    </Container>
  );
}