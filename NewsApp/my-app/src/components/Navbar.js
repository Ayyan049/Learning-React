import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item active">
              </li>
              <li className="nav-item active"><Link to="/business" className="nav-link">Business</Link></li> 
              <li className="nav-item active"><Link to="/entertainment" className="nav-link">Entertainment</Link></li>
              <li className="nav-item active"><Link to="/" className="nav-link">General</Link></li>
              <li className="nav-item active"><Link to="/health" className="nav-link">Health</Link></li>
              <li className="nav-item active"><Link to="/science" className="nav-link">Science</Link></li>
              <li className="nav-item active"><Link to="/sports" className="nav-link">Sports</Link></li>
              <li className="nav-item active"><Link to="/technology" className="nav-link">Technology</Link></li>
               </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
