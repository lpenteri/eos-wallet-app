import React, {Component} from 'react'
// import validation
// import mutation

class Login extends Component {
  constructor (props, context) {
    super(props, context)

    this.state = {
      username: '',
      password: ''
    }
  }

  onChange (e) {
    const {name, value, pattern} = e.target

    if (pattern && !(new RegExp(pattern)).test(value)) {
      return
    }

    this.setState({ [name]: value })
  }

  render () {
    const {username, password} = this.props
    const onChange = this.onChange.bind(this)

    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="username">Username</label>
          <input
            aria-describedby="username"
            className="form-control form-control-lg"
            id="username"
            name="username"
            onChange={onChange}
            required
            type="text"
            value={username}
          />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="username">Password</label>
          <input
            aria-describedby="password"
            className="form-control form-control-lg"
            id="password"
            name="password"
            onChange={onChange}
            required
            type="text"
            value={password}
          />
        </fieldset>

        <fieldset>
          <label>Keep me logged in</label>
          <input type="checkbox" />
        </fieldset>

        <button
          className="btn btn-primary btn-lg"
          type="submit"
        >Submit
        </button>
      </form>
    )
  }
}

export default Login
