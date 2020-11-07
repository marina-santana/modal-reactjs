import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  *{
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: ${props => props.theme.colors.orange};
    font-size: 16px;
    padding: 40px;
  }
`;