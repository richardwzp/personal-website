import React from 'react';
import './link_widget.css';
class LinkedWidget extends React.Component {


    imgSrc;
    widetName;
    linkedItem;

    widetImage() {
	return (<img className="widget-image-icon" src={this.props.imgSrc} alt="widget icon"/>);
    }

    boldedText() {
	return (<span className="linked-widget-text-container font-weight-bold"> 
		{this.props.widetName + ": "}</span>);
    }

    iconTextDiv() {
	return (
	    <div className="linked-widget-left-side-container"> 
		{this.widetImage()}
		{this.boldedText()}
		
	    </ div>
	);
    }

    render() {
	return (
	    <div className="linked-widget-wrapper">
	      {this.iconTextDiv()}
	      {this.props.linkedItem}	      
	    </div>
	);
    }
}



export default LinkedWidget;
