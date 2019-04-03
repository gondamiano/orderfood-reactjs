import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import LazyLoad from 'react-lazy-load';

class BackgroundImage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filepath: null,
		}
	}

	componentDidMount() {
		try{
			fetch('http://localhost:2000/images').then(response => response.json())
			.then(response => {
				this.setState({
					filepath: response,
				});
				console.log(response[0]);
			})
		}
		catch(err){
			console.log(err);
		}
	}

	render() {
		if(this.state.filepath) {
		const images = this.state.filepath;
		return (
			<LazyLoad
				width={100}
				height={100}
				debounce={false}
				offsetVertical={500}
			>

				<img className="imgBackground imgBackground-loaded" src="images/img1.jpg"/>
			</LazyLoad>
		)
		}
		else {
			return (
				<div>asd</div>
			)
		}
	}

}
export default BackgroundImage;
