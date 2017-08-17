import React, {Component} from 'react'
import {Icon, Link, List} from '../components'
import UsersQuery from '../query/users'
import {observer} from 'mobx-react'

const User = ({ url, name, status, icon }) => (
  <Link to={url}>
    <Icon
      className="transaction-thumbnail"
      url={icon}
    />
    <div>
      <p>{name}</p>
      <p>{status}</p>
    </div>
  </Link>
)

class Users extends Component {
  static defaultProps = {
    data: UsersQuery()
  }

  render () {
    const {data} = this.props

    return (
      <List
        data={data}
        renderItem={User}
      />
    )
  }
}

export default Users
