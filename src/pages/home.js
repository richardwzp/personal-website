import React from 'react';
import './home.css';
import SpinningBorder from '../components/spinning_border';

const bio_block = (
    <div className="home-bio-spinning-container">
    <SpinningBorder> 
      <div className='home-bio-container'>
	<p className="home-bio">
        I'm a second year Computer Science student at Northeastern,
	with a concentration in software. I love comic book, D&D, and just SuperHero in general.
	</p>
	<img className="home-bio-image" src="/boy-in-red-tie.png" alt="boy-in-tie"/>
     </div>
	</SpinningBorder>
    </div>);

function generateLink(name, link_name, link) {
    return (
    <div>
    <span className="font-weight-bold">{name}:</span> 
	    <a className="text-decoration-none" href={link}> {link_name}</a>
    </div>
    );
}

const fast_link = (
    <SpinningBorder> 
	<div className="home-fast-link-container">
	    <h3> socials that Im willing to share: </ h3>
	      <ul>
		<li>
		    {generateLink("discord", "Morpheus#0001", "https://discord.com")}
		</li>
		<li> 	
		    {generateLink("email", "wang.zipeng 。dot 。northeastern.edu", "404")}

		</li>
	      </ul>
	</div>
    </SpinningBorder>
);

function Home() {
    return (
<div className="home-container">
          <h3 className="home-title">Hi! this is my personal website, where I put all my wonderous thoughts, ~_~ </h3>
	  <div className="home-horizontal-container">	
	    {bio_block}
	    {fast_link}

	  </div>
            </div>

    );
}

export default Home;
