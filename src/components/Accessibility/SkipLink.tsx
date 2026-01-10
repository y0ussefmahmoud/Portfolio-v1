/**
 * SkipLink Component
 * 
 * Accessibility feature that allows keyboard users to skip navigation.
 * Hidden by default, appears when focused via Tab key.
 * Helps screen reader users navigate directly to main content.
 * 
 * @component
 */

import React from 'react';
import styled from 'styled-components';

const SkipLinkContainer = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 8px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  z-index: 9999;
  transition: top 0.3s ease;

  &:focus {
    top: 6px;
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
  }
`;

/**
 * Props for SkipLink component
 * 
 * @interface SkipLinkProps
 * @property {string} href - Target anchor link (e.g., "#main")
 * @property {React.ReactNode} children - Link text to display
 */
interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

const SkipLink: React.FC<SkipLinkProps> = ({ href, children }) => {
  return (
    <SkipLinkContainer href={href}>
      {children}
    </SkipLinkContainer>
  );
};

export default React.memo(SkipLink);
