import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  button:nth-of-type(1){
    background: ${props => props.theme.colors.heliotrope};
  }

  button:nth-of-type(2){
    background: ${props => props.theme.colors.deepBlush};
  }

  button:nth-of-type(3){
    background: ${props => props.theme.colors.bittersweet};
  }

  button + button{
    margin-left: 20px;
  }
 
  @media (max-width: 650px){
    flex-direction: column;

    button + button{
      margin-left: 0;
      margin-top: 40px ;
    }
  }

`;
