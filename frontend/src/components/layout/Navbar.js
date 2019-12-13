import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bottomBar">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation">
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
                        <Link to="/insurance" className="nav-link">
                            Insurance
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/item" className="nav-link">
                            Items
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/claims" className="nav-link">
                            Claims
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/quote" className="nav-link">
                            Quote
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">
                            About us
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/faq" className="nav-link">
                            FAQ
                            </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
