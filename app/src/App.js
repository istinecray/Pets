import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import Footer from 'components/Footer';

import './App.css';

class App extends Component {
  render() { 
    return (
      <div>

        <Header />

        <div className="container-fluid">
          <div className="row no-gutters">

            <Sidebar username={this.props.user.username} />
            
            <div className="col">
              {this.props.children}
            </div>
 
            <div className="col-lg-3 col-md-12 pl-lg-3 p-md-0">
              <h3>
                Activity Feed
              </h3>
              <p>
                Activity feed will go here.
                <br />
                (Real-time updates on pets, users, and message boards you follow.)
              </p>
            </div>

          </div>
        </div>

        <Footer />

      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default withRouter(connect(mapStateToProps, null)(App));