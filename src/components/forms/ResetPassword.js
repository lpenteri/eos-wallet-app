import React, { Component } from 'react';
// import validation
// import mutation

class ResetPassword extends Component {
<<<<<<< HEAD
  render() {
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="currentPassword">Current password</label>
          <input
            aria-describedby="currentPassword"
            className="form-control form-control-lg"
            name="currentPassword"
            required
            type="text"
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="newPassword">New password</label>
          <input
            aria-describedby="newPassword"
            className="form-control form-control-lg"
            name="newPassword"
            required
            type="text"
          />
        </fieldset>

        <button
          className="btn btn-primary btn-lg"
          type="submit"
        >Update Password
        </button>
      </form>
    );
  }
=======
	render() {
		return (
			<form>
				<fieldset>
					<label>Current password</label>
					<input type="text" />
				</fieldset>

				<fieldset>
					<label>New password<label>
					<input type="text" />
				</fieldset>

				<button type="submit">Sumbit</button>
			</form>
		)
	}
>>>>>>> Revert "Update forms"
}

export default ResetPassword;
