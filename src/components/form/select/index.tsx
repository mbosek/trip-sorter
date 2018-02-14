import * as React from 'react';
import { Wrapper, FieldStyled } from './styles';

export interface IProps {
  cities: Array<string>;
  name: string;
  filter: string;
}

export default class Select extends React.Component<IProps> {
  render() {
    const { cities, name, filter } = this.props;
    return (
      <Wrapper>
        <FieldStyled name={name} component="select">
          <option>Please select</option>
          {cities.filter(i => i !== filter).map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </FieldStyled>
      </Wrapper>
    );
  }
}
