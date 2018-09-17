import React from 'react'
import {Link} from "react-router-dom";
import Form from "./Form";
import Field from "./Field";
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import {login} from "../data/modules/auth";
import {connect} from "react-redux";

const enhance = connect(store => ({
	token: store.auth ? store.auth.token : '',
}), dispatch => ({
	login: data => dispatch(login(data)),
}));

const Login = ({token, login}) => (
	<div>
		<Form onSubmit={login} autoComplete>
			<Form.Title>Log in to your account</Form.Title>
			<Field type='text' name='email' placeholder='Email' icon={Email} required/>
			<Field type='password' name='password' placeholder='Password' icon={Lock} required/>
			<Form.Submit>Log In</Form.Submit>
			<Form.ChangeType>New to Hugo? <Link to='/signup'>Sign Up</Link></Form.ChangeType>
			<div>Forgot your password? <Link to='/reset'>Reset Password</Link></div>
			<div>Need to verify your email? <Link to='/verify'>Verify Email</Link></div>
			<pre>{token && JSON.stringify({token})}</pre>
		</Form>
	</div>
);

export default enhance(Login);
export {
	Login
}