import React from 'react';

const LoginForm = (props) => (
		<div className="row">
			<div className="col-md-4 col-md-offset-4 logform">
				<div className="panel panel-default">
					<div className="panel-heading">
					  <strong>Login</strong>
					</div>
					<div className="panel-body">
						<form className="form-horizontal" onSubmit={props.handleSubmit} >
						<div className="form-group">
							<label htmlFor="inputEmail3" className="col-sm-3 control-label" >
								Email</label>
							<div className="col-sm-9">
								<input type="email" className="form-control" id="inputEmail3" placeholder="Email" name="email" required value={props.email || ""} onChange={props.handleChange} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputPassword3" className="col-sm-3 control-label">
								Password</label>
							<div className="col-sm-9">
								<input type="password" className="form-control" id="inputPassword3" placeholder="Password" name="password" required value={props.password || ""} onChange={props.handleChange}/>
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
						</div>
						<div className="form-group last">
							<div className="col-sm-offset-3 col-sm-9">
								<button types="submit" className="btn btn-success btn-sm">
									Sign in</button>
									 <button type="reset" className="btn btn-default btn-sm">
									Reset</button>
							</div>
						</div>
						</form>
					</div>
					<div className="panel-footer">
						Not Registered?
						<div onClick={props.showRegistrationForm}> register here</div>
					</div>
				</div>
			</div>
		</div>
	);

export default LoginForm;
