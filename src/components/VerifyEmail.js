import React from 'react'
import {Link} from "react-router-dom";
import Form from "./Form";
import Field from "./Field";
import Email from '@material-ui/icons/Email';

const VerifyEmail = () => (
	<div>
		<Form autoComplete>
			<Form.Title>Account Verification</Form.Title>
			<Field type='text' name='email' placeholder='Email' icon={Email} required/>
			<Form.Submit>Log In</Form.Submit>
			<Form.ChangeType>Already a user? <Link to='/'>Log in</Link></Form.ChangeType>
			<div>If you have not received an email yet, check your junk folder, or resend the email now.</div>
		</Form>
	</div>
);

export default VerifyEmail;