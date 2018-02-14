import styled, { StyledFunction } from 'styled-components';
import { Field } from 'redux-form';

export function styledComponentWithProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

export interface IProps {
  name: string;
  component: any;
}

export const Wrapper = styled.div`
  padding: 0;
  height: 45px;
  line-height: 45px;
  margin: 3px auto 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: hidden;
  background-color: #fff;
`;

export const FieldStyled = styledComponentWithProps<IProps, HTMLDivElement>(styled(Field))`
  padding: 5px 8px;
  border: none;
  height: 45px;
  width: 100%;
  font-size: 18px;
  cursor: pointer;
  box-shadow: none;
  background-color: transparent;
  background-image: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
