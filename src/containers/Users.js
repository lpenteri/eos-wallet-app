import React, { Component } from 'react';
import { Icon, Link, List } from '../components';
import UsersQuery from '../query/users';
import { observer } from 'mobx-react';

const User = ({ url, name, status, icon }) => (
  <div className="user transaction">
    <Link to={url}>
      <div className="user-meta d-flex flex-row">
        <Icon
          className="transaction-thumbnail"
          url={icon}
        />
        <div className="user-info">
          <div className="user-name">{name}Demo Name</div>
          <div className="user-memo">{status}</div>
        </div>
      </div>
    </Link>
  </div>
);

class Users extends Component {
  static defaultProps = {
    data: UsersQuery(),
  }

  render() {
    const { data } = this.props;

    return (
      <List
        data={data}
        renderItem={User}
      />
    );
  }
}

export default Users;
