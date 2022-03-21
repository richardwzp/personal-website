import React from 'react';
import './home.css';
import SpinningBorder from '../components/spinning_border';
import LinkedWidget from '../components/link_widget';
import GithubProj from '../components/github_proj';
import useMediaQuery from '@material-ui/core/useMediaQuery';


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




const discord_link =(<a href="https://discord.com"> Morpheus#0001</a>);
const email_link = (<span> wzprichardwzp 。gmail</span>)
const insta_link = (<a href="https://instagram.com"> rich.d_d</a>);
const github_link = (<a href="https://github.com/richardwzp"> richardwzp</a>);
const fast_link = (
    <div className="home-fast-spinner-container">
    <SpinningBorder> 
	<div className="home-fast-link-container">
	    <h3> quick links about me: </ h3>
	      <ul>
		<LinkedWidget imgSrc="/discord_icon.png"
			      widetName="discord"
			      linkedItem={discord_link}/> 

		<LinkedWidget imgSrc="/gmail_icon.png"
			      widetName="email"
			      linkedItem={email_link}/> 

		<LinkedWidget imgSrc="/insta_icon.png"
			      widetName="insta"
			      linkedItem={insta_link}/>
		<LinkedWidget imgSrc="/github_icon.png"
			      widetName="github"
			      linkedItem={github_link}/>
	      </ul>
	</div>
    </SpinningBorder>
    </div>
);

const third_block = (
    <div>  
	<h4 style={{marginLeft: "10px"}}> personal projects:</h4>
	<GithubProj/>
    </ div>
);
let QuoteComp = () => {
//const quote_match = useMediaQuery('(max-width:600px)'); 
const quote_body = (<h3 className="home-quote-body" style={{fontSize: "2vw"}}>It may be desirable to explain, that by the word operation, we mean any process which alters the mutual relation of two or more things, be this relation of what kind it may. This is the most general definition and would include all subjects in the universe.”</h3>);
return (<div className="home-title-container" 
    style={{fontSize: "2vw",
	    borderLeft: "0.8vw solid #ccc",
	    marginLeft: "8vw",
	    marginRight: "8vw",
}}>
    {quote_body}
          	  <h2 className="home-quote-author" style={{fontSize: "3vw"}}> --    Ada LoveLace </h2>
	</div>
);
}
function Home() {
    return (
<div className="home-container">
    <div className="home-horizontal-container">	
	    {bio_block}
	    {fast_link}
	  </div>

    {third_block}
    <QuoteComp/>
    <div className="home-horizontal-container">
    </div>
</div>

    );
}

export default Home;
