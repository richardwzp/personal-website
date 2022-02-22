import React from 'react';
import './meteor.css';
import './star-animation.css';
// https://www.sliderrevolution.com/resources/css-animated-background/
// https://codepen.io/alphardex/pen/RwrVoeL
/**
 * create a blueprint background for all pages, with animation
 * */
class Meteor extends React.Component {

render() {


    return (
	<div class="default-background">
	    {this.props.children}
	    <div class="stars"> 
		{Array.from(Array(25)).map(
		    _ => (<div class="star"> </div>))} 
	    </div>
	</ div>
    );
}
}


export default Meteor;
