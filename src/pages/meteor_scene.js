import React from 'react';
import './meteor_scene.css';
import './star-animation.css';
// https://www.sliderrevolution.com/resources/css-animated-background/
// https://codepen.io/alphardex/pen/RwrVoeL
/**
 * create a blueprint background for all pages, with animation
 * */
class MeteorScene extends React.Component {

render() {


    return (
	<div className="default-background">
	    {this.props.children}
	    <div className="stars"> 
		{Array.from(Array(50).keys()).map(
		    ind => (<div className="star" key={"unique" + ind}> </div>))} 
	    </div>
	</ div>
    );
}
}


export default MeteorScene;
