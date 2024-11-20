import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import { ThemeProvider } from './components/ThemeContext';
function App() {
  return (
    <>
    <ThemeProvider>
      <Toggle/>
    </ThemeProvider>
    </>
  );
}

export default App;
