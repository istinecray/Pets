import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Field from 'components/shared/Input/Field'
import * as userActions from 'actions/userActions' 

class Register extends Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      registration: {
        username: '', 
        email: '', 
        password: ''
      }
    }

    this.setUsername = this.setUsername.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.doRegister = this.doRegister.bind(this);
  }

  setUsername(event) {
    const registration = this.state.registration;
    registration.username = event.target.value;
    this.setState({registration: registration});
  }

  setEmail(event) {
    const registration = this.state.registration;
    registration.email = event.target.value;
    this.setState({registration: registration});
  }

  setPassword(event) {
    const registration = this.state.registration;
    registration.password = event.target.value;
    this.setState({registration: registration});
  }

  doRegister(event) {
    const registration = this.state.registration;
    this.props.dispatch(userActions.registerUser(registration));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.justRegistered) {
      this.props.history.push('/login');
    }
  }
  
  render() { 
    return (
      <div>
        <h3 className="mb-3">
          Register
        </h3>

        <div className="container-fluid p-0">
          <Field label="Username"
            type="text"
            onChange={this.setUsername} />

          <Field label="Email"
            type="text"
            onChange={this.setEmail} />

          <Field label="Password"
            type="password"
            onChange={this.setPassword} />

          <div className="text-center">
            <button className="btn btn-primary mr-3"
              onClick={this.doRegister}>
              Register
            </button>
          </div>
          
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);