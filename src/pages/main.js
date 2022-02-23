import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Meteor from './meteor';
import Home from './home'; 

function Main() {
    return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Meteor' element={<Meteor/>}></Route>
    </Routes>
  );
}

export default Main;
