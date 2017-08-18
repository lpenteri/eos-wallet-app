import React, { Component } from 'react';
import { ResetPasswordForm } from '../components';

class Permissions extends Component {
  render() {
    return (
      <div>
        <h2>Permissions</h2>
        <h3>Keystore</h3>

        <div className="keystore">
          <p>Active</p>
          <div>
            <img
              alt=""
              src=""
            />
            <p>IEfja89uewaejwfawe0fjaewf98hwf8ejfhefwfebfaiuewfeuifh</p>
            <button>Show Private Key</button>
          </div>

          <p>The active key is used to make transfers...</p>
        </div>

        <div className="keystore">
          <p>Owner</p>
          <div>
            <img
              alt=""
              src=""
            />
            <p>IEfja89uewaejwfawe0fjaewf98hwf8ejfhefwfebfaiuewfeuifh</p>
            <button>Show Private Key</button>
          </div>

          <p>The owner key is the master key...</p>
          <p>The private key or password for the owner..</p>
        </div>

        <ResetPasswordForm />
      </div>
    );
  }
}

export default Permissions;
