import styled from 'styled-components';

export const Portal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  max-width: 700px;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  width: 600px;
  height: 250px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h1{
    font-size: 1.5rem;
    color: ${props => props.theme.colors.mineShaft};
    text-align: center;
    margin-bottom: 20px;
  }

  svg{
    cursor: pointer;
    margin-left: auto;
    font-size: 2rem;
    color: ${props => props.theme.colors.scorpion};
  }

  span{
    font-size: 40px;
  }

  @media (max-width: 650px){
    width: 85vw;
  }
`;