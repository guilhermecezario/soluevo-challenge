import React from 'react';

import { Container, Text } from './styles';

export type ButtonProps = {
  text?: string;
  onPress: () => void;
};

export function Button({ text, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};