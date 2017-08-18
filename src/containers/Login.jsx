import React from 'react';
import { LoginForm } from '../components';

const Login = () => (
  <div className="login">
    <div className="login-header">
      <h2>Login to EOS</h2>
      <button className="js-modal-close">x</button>
    </div>

    <LoginForm
      modal
    />
  </div>
);

export default Login;
