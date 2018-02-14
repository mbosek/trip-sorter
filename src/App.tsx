import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import VisibleSearcher from './containers/searcher';
import theme from './styles';
import './styles.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <VisibleSearcher />
  </ThemeProvider>
);

export default App;
