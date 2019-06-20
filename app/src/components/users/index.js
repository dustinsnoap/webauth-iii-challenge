import React from 'react'
import api from '../../config/api'
import withAuth from '../../config/auth'

import Wrapper from './style'

class Users extends React.Component {
    state = {
        users: [],
    }
    componentDidMount = async () => {
        try {
            const response = await api.get('/users')
            this.setState({users: response.data})
        } catch (err) {console.log(err)}
    }
    render = () =>
        <Wrapper className='users'>
            {console.log(this.state.users)}
            <h1>Users</h1>
            <ul className='user-list'>
                {this.state.users.map(user =>
                    <li key={user.uid}>{user.username}</li>
                )}
            </ul>
        </Wrapper>
}

export default withAuth(Users)