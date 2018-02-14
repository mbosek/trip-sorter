import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background: #E20031;
  color: #FFF;
  font-size: 14px;
  padding: 15px 44px;
  border: 1px solid #FFF;
  cursor: pointer;
&:disabled {
  opacity: 0.4
}
`;

export const Wrapper = styled.div`
  &:disabled ${Button} {
    display: none;
  }
`;
