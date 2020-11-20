import styled from 'styled-components';

export const Portal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  max-width: 700px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  position: fixed;
  min-width: 30%;

  h1{
    font-size: 1.25rem;
    color: #222;
    text-align: center;
    margin-bottom: 20px;
  }

  svg{
    cursor: pointer;
    margin-left: auto;
    font-size: 1.25rem;
  }

  span{
    font-size: 30px;
  }
`;