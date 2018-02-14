import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const Wrapper = styled.div`
  background: #ecf0f1;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TotalTime = styled.p`
  padding-left: 3px;
`;

export const TotalCost = styled.p`
  padding-left: 3px;
`;

export const FontAwesomeCustom = styled(FontAwesome)`
  padding-right: 4px;
`;

export const Button = styled.button`
border: none;
background: #E20031;
color: #FFF;
font-size: 14px;
padding: 15px 50px;
border: 1px solid #FFF;
cursor: pointer;
float: right;
`;
