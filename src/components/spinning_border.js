import React from 'react';
import './spinning_border.css';

class SpinningBorder extends React.Component {





render() {
   return (
       <div className="spinning-border-outside-container">
	<div className="spinning-border-animation-wrapper"><span/> <span/></div>
        <div className="spinning-border-element-wrapper">
	    {this.props.children}
        </div>
       </div>); 
}

} 

export default SpinningBorder;
