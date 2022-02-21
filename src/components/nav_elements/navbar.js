import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'
import Tab from './Tab';

function Navbar() {
    const titleElement = (
	<div className="Title"> 
		<div className="nav-title">
			<img className="title-img" src="kitty.gif" alt="not meaningful"/>
			<h2> Richard{"'"}s website </ h2>	
		</ div>
		<div className="navbar-jump"> 
		 <ul>
		   <Tab destination_link="/" destination_name="home" />
		   <Tab destination_link="/tree" destination_name="tree" />
		   <NavLink className="nav-link" to="/tree" />			     </ul> 
	</div>
	</div>)
    
    return titleElement
}
export default Navbar;
