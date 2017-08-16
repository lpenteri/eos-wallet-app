import React, {Component} from 'react'
// import validation
// import mutation

class Login extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
      username: '',
      password: ''
		}
	}

	onChange(e) {
    const {name, value, pattern} = e.target

    if (pattern && !(new RegExp(pattern)).test(value)) {
      return
    }

		this.setState({ [name]: value })
	}

	render() {
    const {username, password} = this.props

		return (
			<form>
				<fieldset className="form-group">
					<label htmlFor="username">Username</label>
					<input
						required
						type="text"
						className="form-control form-control-lg"
						id="username"
						name="username"
						value={username}
						onChange={this.onChange.bind(this)}
						aria-describedby="username"></input>
				</fieldset>

				<fieldset className="form-group">
					<label htmlFor="username">Password</label>
					<input
						required
						type="text"
						className="form-control form-control-lg"
						id="password"
						name="password"
						value={password}
						onChange={this.onChange.bind(this)}
						aria-describedby="password"></input>
				</fieldset>

				<fieldset>
					<label>Keep me logged in</label>
					<input type="checkbox" />
				</fieldset>

				<button type="submit">Login</button>
			</form>
		)
	}
}

export default Login


