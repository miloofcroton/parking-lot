import React from 'react';
import { config, colors } from '../../config';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${colors.primary};
  p {
      color: ${colors.secondary};
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>{config.footer}</p>
    </StyledFooter>
  );
};

export default Footer;
