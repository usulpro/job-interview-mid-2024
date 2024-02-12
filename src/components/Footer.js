import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>Labels:</div>
      <ul>
        <li>documentation</li>
        <li>duplicate</li>
        <li>help wanted</li>
        <li>question</li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
