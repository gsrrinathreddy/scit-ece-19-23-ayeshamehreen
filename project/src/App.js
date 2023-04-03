import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Projects from './pages/projects';
import Certifications from './pages/Certifications';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path="/About" element={<About/>}/>
  <Route path="/Experience" element={<Experience/>}/>
  <Route path="/Hobbies" element={<Hobbies/>}/>
  <Route path="/Qualification" element={<Qualification/>}/>
  <Route path="/Skills" element={<Skills/>}/>
  <Route path="/Projects" element={<Projects/>}/>
  <Route path="/Certifications" element={<Certifications/>}/>
</Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
