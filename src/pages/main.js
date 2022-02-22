import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tree from './tree';
import Home from './home'; 

function Main() {
    return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/tree' element={<Tree/>}></Route>
    </Routes>
  );
}

export default Main;
