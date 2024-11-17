
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Image from './pages/Image'
function App() {
  return (
   <>
   <Routes>
   <Route path='/home' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/image' element={<Image/>} />
   </Routes>
   </>
  );
}

export default App;
