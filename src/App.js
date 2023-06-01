// import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
// import React, { useState } from 'react';
import {
  // HashRouter,
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
          <Navbar/>
          <Alert />
          <div className="container">
            <Routes>
              <Route exact path="/inotebook" element={<Login/>}/>
              <Route exact path="/" element={<Login/>}/>
              <Route exact path="/home" element={<Home />}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/signup" element={<Signup/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </NoteState>
    </>
  );
}

export default App;
