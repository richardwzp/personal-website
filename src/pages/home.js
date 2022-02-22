import React from 'react';
import './home.css';

function Home() {
    return (
<div className="home-container">
          <h3 className="home-title">Hi! this is my personal website, where I put all my wonderous thoughts, ~_~ </h3>
    <div className="home-horizontal-container"> 
	<div className="home-horizontal-element-container">
	<p className="home-bio">
        I'm a second year Computer Science student at Northeastern,
	with a concentration in software. I love comic book, D&D, and just SuperHero in general.
	</p>
	<img className="home-bio-image" src="/boy-in-red-tie.png" alt="boy-in-tie"/>
	</ div>
    <div className="home-animation-wrapper"><span/><span/> </ div>
	</ div>
    </div>

    );
}

export default Home;
