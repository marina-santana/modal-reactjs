import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  button{
    max-width: 500px;
    background-color: ${props => props.theme.colors.translucid};
    color: ${props => props.theme.colors.tundora};
    font-weight: bold;
    border-radius: 10px;
    border:none;
    font-size: 1.25em;
    padding: 20px;
    margin-bottom: 20px;
  }
 

  div.container-forms{
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
  }

`;

export const Form = styled.form`
  background-color: ${props => props.theme.colors.white};
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 20px;

  span{
    margin-left: auto;
    font-size: 1.25em;
  }

  span:before {
  content: "✖";
  color: ${props => props.theme.colors.mineShaft};
  cursor: pointer;
}

  div{
    max-width: 120px;
    margin: auto;
    display: flex;
    height: 120px;
  }

  img{
    max-width: 120px;
    position: absolute;
  }

  input[type='file']{
    position: relative;
    opacity: 0;
    cursor: pointer;
  }

  label{
    font-size: 0.875em;
    color: ${props => props.theme.colors.doveGray};
    margin: 20px 0 5px 5px;
  }

  input[type='text']{
    background-color: ${props => props.theme.colors.whiteSmoke};
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    font-size: 0.875em;
  }

  textarea{
    background-color: ${props => props.theme.colors.whiteSmoke};
    font-size: 0.875em;
    width: 300px;
    height: 110px;
    border-radius: 10px;
    resize: none;
    border: none;
    padding: 5px 10px;
  }
`;
