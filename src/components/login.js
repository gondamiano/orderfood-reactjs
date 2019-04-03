import React, { Component } from 'react';
////import { Image, Carousel} from 'react-bootstrap';
import Register from './register.js';
import PropTypes from 'prop-types';
import BackgroundImage from './backgroundImage.js';
import LoginForm from './loginForm.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user : {
				firstname : PropTypes.STRING,
				lastname: PropTypes.STRING,
				email: PropTypes.STRING,
				password: PropTypes.STRING,
			},
			login: true,
		}
	};

	handleForm = () => {
		console.log(this.state);
	}

	handleEmail = (event) => {
		this.setState({
			email : event.target.value
		})
	}

	handlePassword = (event) => {
		this.setState({
			password : event.target.value
		})
	}

	handleRegisterForm = (obj) => {
		console.log(obj);
	}

	showRegistrationForm = () => {
		this.setState({
			login: !this.state.login
		})
	}

	render() {
		const props = { ...this.state.user };
		console.log(props);
		props.showRegistrationForm = this.showRegistrationForm;
		props.handleForm = this.handleForm;
		props.handleRegisterForm = this.handleRegisterForm;
		if(this.state.login) {
			return (
				<div className="container">
					<LoginForm {...props} />
					<BackgroundImage />
				</div>
			)
		}
		return (
			<div className="container">
			<Register {...props} />
			<BackgroundImage />
			</div>
		)
	}
}

export default Login;
