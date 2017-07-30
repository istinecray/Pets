import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

const requireAuth = Component => {
  class RestrictedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
      debugger;
      if(!this.props.isLoggedIn) {
        const location = this.props.location;
        const redirect = location.pathname + location.search;

        this.props.history.push(`/login?redirect=${redirect}`);
      }
    }

    render() {
      return this.props.isLoggedIn ? <Component {...this.props} /> : null;
    }
  }

    const mapStateToProps = (state, ownProps) => {
      return {
        isLoggedIn: !!state.user.token
      };
    }

  return withRouter(connect(mapStateToProps, null)(RestrictedComponent));
};

export default requireAuth;