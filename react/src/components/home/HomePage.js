import React from 'react';
import {Link} from 'react-router';
import '../../style/homestyle.css'


class HomePage extends React.Component{
	render(){
		return(
			<div className= "jumbotron">
				<h1 className="head">I am doing React</h1>
				<p>This is React HomePage</p>

				<Link to="about" className="btn btn-primary one">More About</Link>
				
			</div>
		);
	}
}

export default HomePage;

