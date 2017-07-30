import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as userActions from 'actions/userActions' 

class Header extends Component { 
  constructor(props, context){
    super(props, context);

    this.doLogout = this.doLogout.bind(this);
  }

  doLogout() {
    this.props.dispatch(userActions.logoutUser());
  }

  render() {  
    return (
      <div>
        <div className="spacer p-3">
          &nbsp;
        </div>
        
        <nav className="navbar navbar-toggleable-md navbar-light fixed-top text-center">

          <div className="hidden-lg-up text-left"> 
            <Link to="/">
              <span className="navbar-brand">
                Pets!
              </span>
            </Link>
          </div>

          <div id="collapsedNav"
            className="collapse navbar-collapse">

              <div className="col-lg-3 hidden-md-down p-0">
              </div>
              
              <div className="col p-0">
                <ul className="navbar-nav mx-auto justify-content-center">
                  
                  <li className="nav-item">
                    <Link to="/account"
                      className="nav-link">
                      Account
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/games"
                      className="nav-link">
                      Games
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/world"
                      className="nav-link">
                      World
                    </Link>
                  </li>

                  <li className="nav-item hidden-md-down"> 
                    <Link to="/">
                      <span className="navbar-brand m-0 px-3">
                        Pets!
                      </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/news"
                      className="nav-link">
                      News
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/forum"
                      className="nav-link">
                      Forum
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/help"
                      className="nav-link">
                      Help
                    </Link>
                  </li>
                  
                </ul>
              </div>

              <div className="col-lg-3 hidden-md-down text-right p-0">
                <span className="nav-text">
                  {
                    (!this.props.user.username) && 
                      <Link to="/login"
                        className="nav-link">
                        Login
                      </Link>
                  } 
                  {
                    (this.props.user.username) &&  
                      <div className="nav-link">
                        <span>Welcome, {this.props.user.username}! &bull; </span> 
                        <Link to="/"
                          onClick={this.doLogout}>
                          Logout
                        </Link> 
                      </div>
                  }
                </span>
              </div>

          </div> 
          
          <button className="navbar-toggler btn-faded navbar-toggler-right" 
            type="button" 
            data-toggle="collapse" 
            data-target="#collapsedNav" 
            aria-controls="collapsedNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span>
          </button>

        </nav>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);