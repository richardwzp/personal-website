import React from 'react';
import {NavLink} from 'react-router-dom';
import './tab.css';
class Tab extends React.Component {

    render() {
	return (
	    <li className="nav-element">
	      <NavLink 
		className={"nav-link priv-nav-link " + this.props.destination_name} 
		to={this.props.destination_link}>
	       {this.props.destination_name}
	      </NavLink>
	    </ li>);
    }
}
export default Tab;
