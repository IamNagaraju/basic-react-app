import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class RegisterForm extends Component {
  state = {
    userId: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  idHandleChange = e => {
    this.setState({
      userId: e.target.value,
    });
  };

  emailHandleChange = e => {
    this.setState({
      email: e.target.value,
    });
  };

  passwordHandleChange = e => {
    this.setState({
      password: e.target.value,
    });
  };

  confirmHandleChange = e => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const { userId, email, password, confirmPassword } = this.state;

    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <label>UserId</label>
        <input type='text' onChange={this.idHandleChange} />
        <label>Email</label>
        <input type='text' onChange={this.emailHandleChange} />
        <label>Password</label>
        <input type='password' onChange={this.passwordHandleChange} />
        <label>Confirm Password</label>
        <input type='password' onChange={this.confirmHandleChange} />
        <button onClick={this.formSubmit}>Submit</button>
      </div>
    );
  }
}
