import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import RegisterForm from './RegisterForm';
import { register } from '../api';

class Register extends React.Component {
  constructor(){
    super();
    this.state = {
      user: this.getEmptyUser()
    };
  }

  getEmptyUser = () => ({ email: "", password: "", confirmation: "" });

  handleRegister= () => {
    register(this.state.user)
      .then(response => {
        if(!response.ok){
          throw Error(response.statusText);
        }
        this.props.history.push('/');
      })
      .catch(err => alert('No fue posible registrarse'));
  }

  handleOnChangeRegister = (field, value) => {
    const user = Object.assign({}, this.state.user);
    user[field] = value;
    this.setState({ user });
  }

  render(){
    return (
      <div>
        <Navbar href="/" titulo="Ingresar"/>
        <Card titulo="Registrarse">
          <RegisterForm user={this.state.user} onChange={this.handleOnChangeRegister} onRegister={this.handleRegister} />
        </Card>
      </div>
    );
  }
}

export default Register;
