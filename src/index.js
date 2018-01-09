
import 'flexboxgrid/dist/flexboxgrid.min.css'
import './style';

import { h, Component } from 'preact';
import { createForm } from 'rc-form';

class App extends Component {

	submit = (e) => {
		e.preventDefault()
		
		this.props.form.validateFields((error, value) => {
		  console.log(error, value);
		});
	  }

	render() {

		let errors;
		const { getFieldProps, getFieldError } = this.props.form;

		return (
			<div className="container-fluid" style={{ minHeight: '100vh' }}>
				<div className="row middle-xs" style={{ height: '100vh' }}>
					<form className="col-xs-12 col-md-4 center-xs" onSubmit={this.submit}>
						<div className="col-xs-12">
							<input 
								name="email"
								type="email"
								placeholder="Email"
								{...getFieldProps('email', {
									onChange(){}, // have to write original onChange here if you need
									rules: [
										{ required: true },
										{ type: 'email'}
									],
								})}
							/>
							<div>
								{(errors = getFieldError('email')) ? errors.join(',') : null}
							</div>
						</div>

						<div className="col-xs-12">
							<input 
								name="password"
								type="password"
								placeholder="Password"
								{...getFieldProps('password', {
									onChange(){}, // have to write original onChange here if you need
									rules: [
										{ required: true }
									],
								})}
							/>
							<div>
								{(errors = getFieldError('password')) ? errors.join(',') : null}
							</div>
						</div>

						<div className="col-xs-12">
						<button>Submit</button>
						</div>

					</form>
				</div>
			</div>
		);
	}
}

export default createForm()(App);
