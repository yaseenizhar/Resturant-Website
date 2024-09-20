import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Pagenotfound from './Pages/Pagenotfound';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Menu' element={<Menu/>}/>
            <Route path='Contact' element={<Contact/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
