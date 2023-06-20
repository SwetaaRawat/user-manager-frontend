import React from 'react';
import { ToastContainer} from 'react-toastify';
import{BrowserRouter, Routes, Route}from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages/Home';
import './App.css';
import { AddEdit } from './pages/AddEdit';
import { View } from './pages/View';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ToastContainer position="top-center"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTask" element={<AddEdit/>} />
        <Route path="/update/:id" element={<AddEdit/>} />
        <Route path="/view/:id" element={<View/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
