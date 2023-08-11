import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from '../src/components/Pre'
import Home from './pages/Home.js'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Auth from './pages/Auth';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/auth' element={<Auth/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
