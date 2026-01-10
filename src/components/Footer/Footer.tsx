/**
 * Footer Component
 * 
 * Simple footer with copyright information and tagline.
 * Displays current year dynamically.
 * 
 * @component
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Translations } from '../../i18n/translations';

const FooterSection = styled.footer`
  padding: 3rem 0 1rem;
  background: ${props => props.theme.colors.bgPrimary};
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

/**
 * Props for Footer component
 * 
 * @interface FooterProps
 * @property {Translations} translations - Translation object for current language
 */
interface FooterProps {
  translations: Translations;
}

const Footer: React.FC<FooterProps> = ({ translations }) => {
  return (
    <FooterSection>
      <Container>
        <p>{translations.footer.tag}</p>
        <p>&copy; {new Date().getFullYear()} Y0ussef Mahmoud. {translations.footer.rights}</p>
      </Container>
    </FooterSection>
  );
};

export default memo(Footer);
