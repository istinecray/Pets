import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import ActivePet from './ActivePet';

class Sidebar extends Component {
  render() { 
    const loggedIn = !!this.props.username;

    let sidebar = null;
    if(loggedIn) {
      sidebar = (
        <div>
          <ActivePet owner={this.props.username} />

          <div className="container-fluid p-0 text-left mt-3">
            <div className="row">
              <div className="col">

                <h3>
                  Friends
                </h3>

                <p>
                  Currently/recently online friends will display here.
                </p>

                <div className="container-fluid p-0"> 
                  <div className="row no-gutters mb-3"> 

                      <img src="http://via.placeholder.com/75x75"
                        alt="Avatar"
                        className="img-fluid pull-left" />

                    <div className="col pl-3"> 

                      <strong>
                        Username 
                      </strong>

                      <span className="text-success">
                        &nbsp;&bull;
                      </span>

                      <br />

                      Icons

                    </div> 
                    
                  </div> 
                </div>

              </div>
            </div>
          </div>

        </div>
      );
    } else {
      sidebar = (
        <div>
          
          <Link to="/register">
            Register 
          </Link> or <Link to="/login">
            Login 
          </Link>!
          
        </div>
      );
    }

    return (
      <div className="col-lg-3 col-md-4 col-sm-12 pr-md-3 p-sm-0 text-center">

        {sidebar}

      </div>
    )
  }
}

Sidebar.propTypes = {
  username: PropTypes.string
};

export default Sidebar;