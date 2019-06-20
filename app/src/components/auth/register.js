import React from 'react'
import Wrapper from './style'

import api from '../../config/api'

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        department: '',
    }
    componentDidMount = () => {
        if(localStorage.getItem('token'))
            this.props.history.push('/users')
    }
    h_submit = async () => {
        try {
            const payload = {
                username: this.state.username,
                password: this.state.password,
                department: this.state.department,
            }
            const response = await api.post('/register', payload)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }
    h_field_update = e => this.setState({[e.target.name]: e.target.value})
    render = () =>
        <Wrapper className='register'>
            <div className='form'>
                <h1>Register</h1>
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
                <input
                    onChange={this.h_field_update}
                    type='text'
                    name='department'
                    placeholder='Department'
                    value={this.state.department}/>
                <button onClick={this.h_submit}>Register</button>
            </div>
        </Wrapper>
}

export default Register