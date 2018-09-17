import React from 'react'
import PropTypes from 'prop-types';
import Field from "./Field";

const FormTitle = ({className = 'form-title', children}) => <div className={className}>{children}</div>;
const FormChangeType = ({className = 'form-change-type', children}) => <div className={className}>{children}</div>;
const FormSubmit = ({className = 'form-submit', children}) => <button className={className}>{children}</button>;

/**
 * Retrieves input data from a form and returns it as a JSON object.
 * @param  {HTMLFormControlsCollection} elements  the form elements
 * @return {Object}                               form data as an object literal
 */
const formToJSON = elements => [].reduce.call(elements, (data, element) => {
	if (element.name) data[element.name] = element.value;
	return data;
}, {});

class Form extends React.PureComponent {
	state = {
		formData: {}
	};
	static propTypes = {
		autoComplete: PropTypes.bool,
		onSubmit: PropTypes.func,
	};
	static defaultProps = {
		autoComplete: false,
		onSubmit: console.log,
	};
	handleChange = (name, value) => this.setState(() => ({
		formData: {
			...this.state.formData,
			[name]: value,
		}
	}));

	parseChildren = (children) => {
		let title = '', changeType = '', submit = FormSubmit, fields = [], other = [];
		React.Children.forEach(children, (child, key) => {
			switch (child.type) {
				case FormTitle:
					title = child;
					break;
				case FormChangeType:
					changeType = child;
					break;
				case FormSubmit:
					submit = child;
					break;
				case Field:
					fields.push(React.cloneElement(child, {key}));
					break;
				default:
					other.push(React.cloneElement(child, {key}));
			}
		});
		return {title, changeType, submit, fields, other}
	};

	onSubmit = event => {
		event.preventDefault();
		const data = formToJSON(event.target);
		this.props.onSubmit(data)
	};

	render() {

		const {autoComplete} = this.props;
		const {title, changeType, submit, fields, other} = this.parseChildren(this.props.children);
		return (
			<form className='form elevation2' onSubmit={this.onSubmit} autoComplete={autoComplete ? "on" : "off"}>
				{title}
				{fields}
				{submit}
				<hr className='form-separator'/>
				{changeType}
				<div className="form-other">
					{other}
				</div>
			</form>
		);
	}
}

Form.Title = FormTitle;
Form.ChangeType = FormChangeType;
Form.Submit = FormSubmit;

export default Form;

export {FormTitle}