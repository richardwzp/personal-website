import React from 'react'
import "./title.css"
import { NavLink } from 'react-router-dom'
function Title() {
    const titleElement = (
	<div className="Title"> 
		<div className="nav-title">
			<img className="title-img" src="kitty.gif" alt="not meaningful"/>
			<h1> Richard{"'"}s website </ h1>	
		</ div>
		<div className="link-tabs"> 
		   <NavLink className="nav-link" to="/">
		    home
		   </NavLink>
		   <NavLink className="nav-link" to="/tree">
			tree
		    </NavLink>	
		    </div>
	</div>)
    
    return titleElement
}
export default Title;
