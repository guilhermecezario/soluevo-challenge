import React, { useState } from 'react';

import { Container, Content } from './styles';

import List from '../../components/List';
import Form from '../../components/Form';

export default function Home() {
  const [results, setResults] = useState([]);

  function onSubmit(text: string): void {
    const textArray = text.toLowerCase().split(' ');

    const newResult = [];

    text.toLowerCase().split(' ').forEach((word) => {
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