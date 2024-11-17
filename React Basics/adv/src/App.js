
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Image from './pages/Image'
import Media from './pages/Media'
import Song from './pages/Song'
function App() {
  return (
   <>
   <Routes>
   <Route path='/home' element={<Home/>} />
   <Route path='/about' element={<About/>} />
   <Route path='/image' element={<Image/>} />
   <Route path='/media' element={<Media/>} />
   <Route path='/song' element={<Song/>} />
   
   </Routes>
   </>
  );
}

export default App;
