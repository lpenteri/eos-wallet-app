import React, { Component } from 'react';
import Link from '../Link';
// import validation
// import mutation

class Login extends Component {
  render() {
    const { username, handleClose, modal } = this.props;

    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="username">Username</label>
          <div clasName="input-container">
            <div className="icon" />

            <input
              aria-describedby="username"
              className="form-control form-control-lg"
              id="username"
              name="username"
              required
              type="text"
              value={username}
            />
          </div>
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="username">Password</label>
          <input
            aria-describedby="password"
            className="form-control form-control-lg"
            id="password"
            name="password"
            required
            type="text"
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
          <input name="keepLoggedIn" type="checkbox" />
        </fieldset>

        <div className={`button-group ${modal && 'modal'}`}>
          <button
            className="btn btn-primary btn-lg"
            type="submit"
          >
            Submit
          </button>

          {modal &&
            <button
              className=""
              onClick={handleClose}
            >
              Cancel
            </button>}

          <Link to="/create-account">Don't have an account?</Link>
        </div>
      </form>
    );
  }
}

export default Login;
