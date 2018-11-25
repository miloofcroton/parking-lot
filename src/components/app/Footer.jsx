import React from 'react';
import styled from 'styled-components';
import { config, colors } from '../../config';

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
