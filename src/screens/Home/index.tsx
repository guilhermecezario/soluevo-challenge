import React, { useState } from 'react';

import { Container, Content } from './styles';

import List from '../../components/List';
import Form from '../../components/Form';

export type IResult = {
  word: string;
  count: number;
};

export default function Home() {
  const [results, setResults] = useState<IResult[]>([]);

  function onSubmit(text: string): void {
    const textArray = text.toLowerCase().split(' ');

    const newResult: IResult[] = [];

    textArray.forEach((word) => {
      let count = textArray.filter((w) => w == word).length;

      if (!newResult.find((resul) => resul.word == word)) {
        newResult.push({ count, word });
      };
    });

    setResults(newResult);
  }

  function onCloseList() {
    setResults([]);
  }

  return (
    <Container>
      <Content>
        {results.length > 0 ? (
          <List list={results} onClose={onCloseList} />
        ) : (
          <Form onSubmit={onSubmit} />
        )}
      </Content>
    </Container>
  );
};