import React from 'react'
import {Link} from "react-router-dom";
import Form from "./Form";
import Field from "./Field";
import Email from '@material-ui/icons/Email';

const ResetPassword = () => (
	<div>
		<Form autoComplete>
			<Form.Title>Forgot Password</Form.Title>
			<Field type='text' name='email' placeholder='Email' icon={Email} required/>
			<Form.Submit>Reset Password</Form.Submit>
			<Form.ChangeType>Know your password? <Link to='/'>Log in</Link></Form.ChangeType>
		</Form>
	</div>
);

export default ResetPassword;