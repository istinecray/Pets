import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() { 
    return (
      <footer className="footer text-center p-3">
        <span>
          &copy; 2017&nbsp; &bull; &nbsp;
        </span>
        <Link to="/about">
          About
        </Link>
      </footer>
    );
  }
}

export default Footer;