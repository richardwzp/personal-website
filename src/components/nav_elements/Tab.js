import React from 'react';
import {NavLink} from 'react-router-dom';
class Tab{


    render() {
	return (
	    <li className="nav-item">
	      <NavLink className="nav-link" to={this.props.destination_link}/>
	       {this.props.destination_name}
	    </ li>);
    }
}
export default Tab;
