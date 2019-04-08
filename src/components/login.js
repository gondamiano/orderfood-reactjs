import React, { Component } from 'react';
////import { Image, Carousel} from 'react-bootstrap';
import Register from './register.js';
import PropTypes from 'prop-types';
import BackgroundImage from './backgroundImage.js';
import LoginForm from './loginForm.js';
import axios from 'axios';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstname : PropTypes.STRING,
			lastname: PropTypes.STRING,
			email: PropTypes.STRING,
			password: PropTypes.STRING,
			login: true,
		}
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleRegisterForm = (event) => {
		const user = {firstname: this.state.firstname, lastname: this.state.lastname, email: this.state.email, password: this.state.password}
		axios.post('http://localhost:2000/register', user)
		.then(response => {
			this.showRegistrationForm();
		})
		.catch(err => {
			console.log("fallo: " + err);
		})
	}

	showRegistrationForm = () => {
		this.setState({
			login: !this.state.login
		})
	}

	handleSubmit = (event) => {
		axios.post('http://localhost:2000/login', {email: this.state.email, password: this.state.password}).then((res) => {
			console.log(res.status + " acaa");
		})
		.catch(err => {
			console.log(err + "veniamos charlando" );
		})
		event.preventDefault();
	}

	render() {
		const props = { ...this.state };
		props.showRegistrationForm = this.showRegistrationForm;
		props.handleSubmit = this.handleSubmit;
		props.handleChange = this.handleChange;
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
