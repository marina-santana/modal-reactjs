import styled from 'styled-components';

export const Container = styled.button`
  padding: 20px 40px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  outline: none;

  svg, span{
    font-size: 1.5rem;
    color: ${props => props.theme.colors.white}
  }

  svg{
      margin-right: 10px;
  }

  span{
    font-weight: 600;
  }

  @media (max-width: 650px){
    width: 80vw;
  }
`;
