import React from 'react';
import { Text } from 'react-native';

import { Container, Title } from './styles';

import { Button } from '../Button';

export type ItemList = {
  word: string;
  count: number;
};

export type ListProps = {
  list: ItemList[];
  onClose: () => void;
};

export default function List({ list, onClose } : ListProps) {
  return (
    <Container>
      <Title>Resultado:</Title>

      {list.map((result, index) => (
        <Text key={index}>- [{result.count}] {result.word}</Text>
      ))}

      <Button text='Voltar' onPress={onClose} />
    </Container>
  );
};