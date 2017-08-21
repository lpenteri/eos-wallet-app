import React, { Component } from 'react';
import { Users as UsersContainer } from '../containers';
import { Helmet } from 'react-helmet';

class Users extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Users</title>
        </Helmet>
        <div className="container-full">
          <div className="d-flex justify-content-end">
            <div className="mr-auto align-self-center">
              <h2>Users</h2>
            </div>
            <div className="align-self-center">
              <div className="module-search">
                <input
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <UsersContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
