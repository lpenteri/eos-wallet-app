import React, {Component} from 'react'
// import validation
// import mutation

class ResetPassword extends Component {
	render() {
		return (
			<form>
				<fieldset className="form-group">
					<label htmlFor="currentPassword">Current password</label>
					<input
						required
						type="text"
						className="form-control form-control-lg"
						name="currentPassword"
						aria-describedby="currentPassword"></input>
				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="newPassword">New password</label>
					<input
						required
						type="text"
						className="form-control form-control-lg"
						name="newPassword"
						aria-describedby="newPassword"></input>
				</fieldset>

				<button type="submit" className="btn btn-primary btn-lg">Submit</button>
			</form>
		)
	}
}

export default ResetPassword

