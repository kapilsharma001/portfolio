// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import About from './component/about/About';
import Home from './component/about/Home';
import Project from './component/about/project';
import Contact from './component/about/contact';
import Todos from './component/Todos';

const App = () => {
  return (
    <Router>
      <div className='main-div'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todo-list' element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
