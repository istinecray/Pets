import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import queryString from 'query-string';

import Field from 'components/shared/Input/Field'
import * as userActions from 'actions/userActions' 

class Login extends Component { 
  constructor(props, context) {
    super(props, context);

    this.state = {
      credentials: {
        username: '', 
        password: ''
      }
    }

    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.doLogin = this.doLogin.bind(this);
  }

  setUsername(event) {
    const credentials = this.state.credentials;
    credentials.username = event.target.value;
    this.setState({credentials: credentials});
  }

  setPassword(event) {
    const credentials = this.state.credentials;
    credentials.password = event.target.value;
    this.setState({credentials: credentials});
  }

  doLogin(event) {
    const credentials = this.state.credentials;
    this.props.dispatch(userActions.loginUser(credentials));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.user.token) {
      debugger;
      const params = queryString.parse(this.props.location.search);
      this.props.history.push(params.redirect || '/');
    }
  }
  
  render() { 
    return (
      <div>
        <h3 className="mb-3">
          Login
        </h3>

        {
          this.props.location.search && 
          <p>Please log in to view this page.</p>
        }

        <div className="container-fluid p-0">
          <Field label="Username"
            type="text"
            onChange={this.setUsername} />

          <Field label="Password"
            type="password"
            onChange={this.setPassword} />

          <div className="text-center">
            <button className="btn btn-primary mr-3"
              onClick={this.doLogin}>
              Login
            </button>
            <Link to="/register">
              <button className="btn btn-default">
                Register
              </button>
            </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);