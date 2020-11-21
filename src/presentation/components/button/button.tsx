import React from 'react';
import { Container } from './button-styles';
import { ReactComponent as SvgStar } from '../../assets/star.svg';

const Button = ({children, ...props}: any) => {
  return (
    <Container {...props}>
        <SvgStar/> <span>{children}</span>
    </Container>
  );
}

export default Button;