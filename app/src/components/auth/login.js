import React from 'react'
import Wrapper from './style'
import {withRouter} from 'react-router-dom'

import api from '../../config/api'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }
    componentDidMount = () => {
        if(localStorage.getItem('token'))
            this.props.history.push('/users')

    }
    h_submit = async () => {
        try {
            const payload = {
                username: this.state.username,
                password: this.state.password
            }
            const response = await api.post('/login', payload)
            localStorage.setItem('token', response.data.token)
            this.props.history.push('/users')
        } catch (err) {
            console.log(err)
        }
    }
    h_field_update = e => this.setState({[e.target.name]: e.target.value})
    render = () =>
        <Wrapper className='login'>
            <div className='form'>
                <h1>Login</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={this.h_field_update}
                    value={this.state.username}/>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.h_field_update}
                    value={this.state.password}/>
                <button onClick={this.h_submit}>Login</button>
            </div>
        </Wrapper>
}

export default withRouter(Login)