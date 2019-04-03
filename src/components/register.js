import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Register extends Component {
	constructor(props, context) {
		super(props);
		this.state = {
			props: props,
			firstname : "",
			lastname: "",
			email: "",
			password: "",

		}
	}

	handleRegisterForm = (event) => {
		this.props.handleRegisterForm(this.state);
		event.preventDefault();
	}


		handleChange = (event) => {
			const name = event.target.name;
			const value = event.target.value;
			console.log(name, value);

			this.setState({
				[name]: value				
			});
		}


render() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-md-offset-4 logform">
					<div className="panel panel-default">
						<div className="panel-heading">
						  <strong>Register</strong>
						</div>
						<div className="panel-body">
							<form className="form-horizontal" onSubmit={this.handleRegisterForm}>
							<div className="form-group">
								<label htmlFor="username" className="col-sm-3 control-label" >
									first name</label>
								<div className="col-sm-9">
									<input type="text" className="form-control" id="inputEmail3" placeholder="first name" required value={this.state.firstname || ""} name="firstname" onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="lastname" className="col-sm-3 control-label" >
									Last name</label>
								<div className="col-sm-9">
									<input type="text" className="form-control" id="inputEmail3" placeholder="Last name" required value={this.state.lastname || ""} name="lastname"  onChange={this.handleChange} />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="inputEmail3" className="col-sm-3 control-label" >
									Email</label>
								<div className="col-sm-9">
									<input type="email" className="form-control" id="inputEmail3" placeholder="Email" required value={this.state.email || ''} name="email"  onChange={this.handleChange}  />
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="inputPassword3" className="col-sm-3 control-label">
									Password</label>
								<div className="col-sm-9">
									<input type="password" className="form-control" id="inputPassword3" placeholder="Password" required value={this.state.password || ""} name="password" onChange={this.handleChange}/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-3 col-sm-9">
									<div className="checkbox">
										<label>
											<input type="checkbox" />
											Remember me
										</label>
									</div>
								</div>
								<div className="form-group last">
									<div className="col-sm-offset-3 col-sm-9">
										<button types="submit" className="btn btn-success btn-sm">
											Register</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}

}

export default Register;
