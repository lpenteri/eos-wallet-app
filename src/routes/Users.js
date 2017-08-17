import React, { Component } from 'react'
import {Users as UsersContainer} from '../containers'

class Users extends Component {
	render() {
		return (
			<div>
                <div className="container-full">
                    <div className="d-flex justify-content-end">
                        <div className="mr-auto align-self-center">
                            <h2>Users</h2>
                        </div>
                        <div className="align-self-center">
                            <div className="module-search">
                              <input type="text" className="form-control"></input>
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
		)
	}
}

export default Users
