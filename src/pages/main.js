import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tree from './tree';
import Home from './home'; 
import BluePrint from './blueprint';

function Main() {
    return (
    <BluePrint>
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/tree' element={<Tree/>}></Route>
    </Routes>
    </BluePrint>
  );
}

export default Main;
