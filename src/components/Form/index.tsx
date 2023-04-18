import React, { useState } from 'react';

import { Container } from './styles';

import { Input } from '../Input';
import { Button } from '../Button';

export type FormProps = {
  onSubmit: (text: string) => void;
};

export default function Form({onSubmit} : FormProps) {
  const [text, setText] = useState('');

  function onChangeText(t: string) {
    setText(t);
  };

  function onPressButton() {
    if (!text) return;

    onSubmit(text);
  };

  return (
    <Container>
      <Input
        label="Digite uma frase:"
        onChangeText={onChangeText}
        value={text}
      />

      <Button text="OK" onPress={onPressButton} />
    </Container>
  );
};