import React from 'react';
import Toggle from './Pages/Toggle';
import { ThemeProvider } from './Pages/ThemeContext';
import './App.css'; // Add this line

function App() {
  return (
    <>
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>
    </>
  );
}

export default App;