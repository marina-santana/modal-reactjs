import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import  {theme} from '../presentation/styles/theme';

import { GlobalStyle } from '../presentation/styles/global';
import Router from './routes/router';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle/>
        <Router/>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
