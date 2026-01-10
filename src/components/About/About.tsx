/**
 * About Component
 * 
 * Simple section displaying personal bio and introduction.
 * Uses centered layout with title and description text.
 * 
 * @component
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Translations } from '../../i18n/translations';

const AboutSection = styled.section`
  padding: 5rem 0;
  background: ${props => props.theme.colors.bgSecondary};
  scroll-margin-top: 100px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.textPrimary};
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
`;

/**
 * Props for About component
 * 
 * @interface AboutProps
 * @property {Translations} translations - Translation object for current language
 */
interface AboutProps {
  translations: Translations;
}

const About: React.FC<AboutProps> = ({ translations }) => {
  return (
    <AboutSection id="about">
      <Container>
        <Title>{translations.about.title}</Title>
        <Description>{translations.about.bio}</Description>
      </Container>
    </AboutSection>
  );
};

export default memo(About);
