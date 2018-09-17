import React from 'react'
import {Link} from "react-router-dom";
import Form from "./Form";
import Field from "./Field";
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import Person from '@material-ui/icons/Person';
import connect from "react-redux/es/connect/connect";
import {signup} from "../data/modules/signup";

const enhance = connect(store => ({
	current: store.signup ? store.signup.current : '',
}), dispatch => ({
	signup: data => dispatch(signup(data)),
}));


const SignUp = ({current, signup}) => (
	<div>
		<Form onSubmit={signup}>
			<Form.Title>Sign up now</Form.Title>
			<Field type='text' name='first_name' placeholder='First Name' icon={Person} required/>
			<Field type='text' name='last_name' placeholder='Last Name' icon={Person} required/>
			<Field type='text' name='email' placeholder='Email' icon={Email} required/>
			<Field type='password' name='password' placeholder='Password' icon={Lock} required/>
			<Field type='checkbox' name='agree'
				   label={() =>
					   <React.Fragment>I agree to the <Link to='https://hugosway.com/terms-conditions/'>
						   terms and conditions</Link>*</React.Fragment>}
				   icon={Lock} required/>
			<Form.Submit>Sign Up</Form.Submit>
			<Form.ChangeType>Already a user? <Link to={'/'}>Login</Link></Form.ChangeType>
			<div>Need to verify your email? <Link to='/verify'>Verify Email</Link></div>
			<pre>{current && JSON.stringify(current)}</pre>
		</Form>
	</div>
);

export default enhance(SignUp);
export {SignUp}