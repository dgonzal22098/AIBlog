import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop} style={{ opacity: visible ? 1 : 0 }}>
      ↑
    </Button>
  );
};

export default ScrollToTopButton;

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: #b9bbf4;
  border: none;
  color: #1e2556;
  font-size: 1.5rem;
  padding: 0.8rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(39, 20, 82, 0.3); // más suave
  transition: opacity 0.3s ease-in-out, transform 0.2s;
  z-index: 999;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 12px rgba(4, 9, 72, 0.5); // leve aumento al hover
  }
`;
