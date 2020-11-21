import { createGlobalStyle} from 'styled-components';
import imgBackgorund from '../assets/img-background.png';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

  *{
      padding: 0;
      margin: 0;
      font-family: 'Source Sans Pro', sans-serif;
  }

  body{
    background-image: url(${imgBackgorund});
    background-repeat: repeat;
    background-size: 50%;
    font-size: 16px;
  }
`;