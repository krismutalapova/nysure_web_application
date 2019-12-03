import React from "react";
import { Link } from "react-router-dom";

function Navbar({onLogout}) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bottomBar">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/infopages" className="nav-link">
                                About us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/insurance" className="nav-link">
                                Insurance
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/uploading" className="nav-link">
                                Upload files 
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/infopages" className="nav-link">
                                Contact details
                            </Link>
                        </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;