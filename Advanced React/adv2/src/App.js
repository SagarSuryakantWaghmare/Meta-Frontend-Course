import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import { ThemeProvider } from './components/ThemeContext';
import Para from './components/Para';
import { UserProvider } from './components/UserContext';
import ListRendering from './components/ListRendering';

function App() {
  return (
    <>
    {/* <ThemeProvider>
      <Toggle/>
    </ThemeProvider> */}
    {/* <UserProvider>
      <Para/>
    </UserProvider> */}
    <ListRendering/>
    </>
  );
}

export default App;
