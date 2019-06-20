import React from 'react'
import {Route, NavLink, withRouter} from 'react-router-dom'

import Wrapper from './style'
import Register from '../auth/register'
import Login from '../auth/login'
import Users from '../users'

class App extends React.Component {
    h_logout = () => {
        localStorage.removeItem('token')
        this.props.history.push('/login')
    }
    render= () =>
        <Wrapper className='app'>
            <nav className='nav'>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <button onClick={this.h_logout}>Logout</button>
            </nav>
            <div className='routes'>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/users' component={Users} />
            </div>
        </Wrapper>
}

export default withRouter(App)
