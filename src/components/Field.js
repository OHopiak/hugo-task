import React from 'react'


const Field = ({type, name, required, placeholder, label: Label, icon: Icon, handleChange}) => {
	const onChange = (event) => handleChange(event.target.getAttribute('name'), event.target.value);
	let Input;
	switch (type) {
		case 'checkbox':
			Input = () => (
				<div className="check-group">
					<input {...{type, name, required, placeholder, onChange}}
						   id={name + '-check'} className='check-input'/>
					<label htmlFor={name + '-check'} className="check-label"><Label/></label>
				</div>
			);
			break;
		default:
			Input = () => (
				<div className='input-group'>
					<input {...{type, name, required, placeholder, onChange}} className='form-control'/>
					<div className="input-group-append">
						<Icon/>
					</div>
				</div>
			)
	}
	return <Input/>
};

Field.defaultProps = {
	icon: () => '',
	label: () => '',
	handleChange: () => '',
};

export default Field;