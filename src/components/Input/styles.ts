import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 350px;

  flex-direction: column;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 500;

  color: #111827;

  margin-bottom: 5px;
`;

export const InputText = styled(TextInput)`
  width: 100%;

  background-color: #f9fafb;
  color: #7A7A80;

  padding: 15px 25px;

  font-size: 16px;

  border: 1px solid #d1d5db;
  border-radius: 5px;
`;