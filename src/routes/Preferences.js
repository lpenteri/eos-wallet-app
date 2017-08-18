import React, { Component } from 'react';
import { ResetPasswordForm } from '../components';
import { Helmet } from 'react-helmet';

class Preferences extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Preferences</title>
        </Helmet>
        <h2>Preferences</h2>
        <ResetPasswordForm />
      </div>
    );
  }
}

export default Preferences;
