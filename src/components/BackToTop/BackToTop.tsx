/**
 * BackToTop Component
 * 
 * Floating button that appears when user scrolls down.
 * Smoothly scrolls to top of page when clicked.
 * 
 * @component
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTopButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  opacity: ${props => props.isVisible ? '1' : '0'};
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  z-index: 1000;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(47, 111, 237, 0.3);
  }
`;

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    /**
     * Shows/hides button based on scroll position
     * Button appears when user scrolls past 300px
     */
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Smoothly scrolls page to top
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <BackToTopButton 
      isVisible={isVisible} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </BackToTopButton>
  );
};

export default BackToTop;
