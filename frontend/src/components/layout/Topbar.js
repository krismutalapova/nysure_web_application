import React from 'react';
import { Link } from "react-router-dom";

function Topbar({ onLogout, user }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark topBar">
            <a className="navbar-brand" href="/">
                <img src="/images/NySureLogoWhite-2.png" alt="logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <p className="user">
                    Welcome {user.name || user.email}, 
                    <br></br>
                    what would you like to keep safe today?
                </p>
                <Link to="/profile">
                        <span className="edit-info"></span>
                    </Link>
                <button className="btn btn-outline-info my-2 my-sm-0" onClick={onLogout}>Logout</button>
            </div>
            
        </nav>
    );
}

export default Topbar;
