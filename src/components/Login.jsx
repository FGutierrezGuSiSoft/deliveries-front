import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import LoginForm from './LoginForm';
import { login } from '../api';

class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      user: this.getEmptyUser()
    };
  }

  componentDidMount() {
    localStorage.removeItem('token');
  }

  getEmptyUser = () => ({ email: "", password: "" });

  handleLogin = () => {
    login(this.state.user)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.text();
      })
      .then(token => {
        localStorage.setItem('token', token);
        this.props.history.push('/deliveries');
      })
      .catch(err => alert("No fue posible ingresar"))
  }

  handleOnChangeLogin = (field, value) => {
    const user = Object.assign({}, this.state.user);
    user[field] = value;
    this.setState({ user });
  }

  render() {
    return (
      <div>
        <Navbar href="register" titulo="Registrarse"/>
        <Card titulo="Ingresar">
          <LoginForm user={this.state.user} onChange={this.handleOnChangeLogin} onLogin={this.handleLogin} />
        </Card>
      </div>
    );
  }
}

export default Login;
