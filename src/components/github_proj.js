import React from 'react';
import Axios from "axios";
import { Grid } from "@material-ui/core";
import GithubPane from './githubPane';




class GithubProj extends React.Component {

    /**
     * mount the github info from a rest API call
     * */
    componentDidMount() {
        fetch('https://api.github.com/users/richardwzp/repos')
	.then(res => res.json())
        .then(data => {
	    this.setState({repos: data});
        });
    Axios.get("https://github-lang-deploy.herokuapp.com/").then(
	async (res) => this.setState({ language: res.data })
    );

      }
   generateProjs() {
    let ind_count = 0;
    if (this.state.repos === undefined || this.state.language === undefined) {
	return <div></div>;
    }
    let panes = this.state.repos.map(proj => 
	<GithubPane repo={proj} key={ind_count++} language={this.state.language}/> );
    
   let wrapped_panes = (<Grid container direction="row"> {panes} </ Grid>); 
    return wrapped_panes;
   } 

    render() {
	return (
	    <Grid container spacing={1} className="git-project-container" direction="row">
	   <div> {this.state != null ? this.generateProjs() : []}</div> 
	    </Grid>
	);

    }
}





export default GithubProj;
