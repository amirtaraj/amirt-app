import React, { useState, useEffect } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { func } from 'prop-types';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
`;

const lightTheme = {
  background: 'white',
  text: 'black',
  toggleBorder: 'lightgrey',
};

const darkTheme = {
  background: 'black',
  text: 'white',
  toggleBorder: 'grey',
};

const Toggle = ({ toggleTheme }) => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(prefersDarkScheme.matches);

    const handleChange = (event) => {
      setIsDark(event.matches);
    };

    prefersDarkScheme.addEventListener('change', handleChange);

    return () => {
      prefersDarkScheme.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Button onClick={handleToggle}>Switch Theme</Button>
      {/* Your application content here */}
    </ThemeProvider>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
};

const App = () => {
  return (
    <Toggle>
      {/* Your application content here */}
    </Toggle>
  );
};

export default App;
