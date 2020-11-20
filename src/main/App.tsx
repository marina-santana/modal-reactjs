import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import  {theme} from '../presentation/styles/theme';

import { GlobalStyle } from '../presentation/styles/global';
import Router from './routes/router';
import ModalProvider from '../presentation/context/modal-context';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Fragment>
          <GlobalStyle/>
          <Router/>
        </Fragment>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
