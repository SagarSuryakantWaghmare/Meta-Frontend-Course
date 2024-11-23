import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import { ThemeProvider } from './components/ThemeContext';
import Para from './components/Para';
import { UserProvider } from './components/UserContext';
import ListRendering from './components/ListRendering';
import Weather from './pages/Weather';
import Jokes from './pages/Jokes';
import Todo from './pages/Todo';
import Quotes from './pages/Quotes';
function App() {
  return (
    <>
    {/* <ThemeProvider>
      <Toggle/>
    </ThemeProvider> */}
    {/* <UserProvider>
      <Para/>
    </UserProvider> */}
    {/* <ListRendering/>
     */}
     {/* <Weather/> */}
     {/* <Jokes/>
      */}
      {/* <Todo/> */}
      <Quotes/>
    </>
  );
}

export default App;
