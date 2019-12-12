import React from 'react';

function Topbar({onLogout, user}) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark topBar">
            <a className="navbar-brand" href="/">
                <img src="/images/NySure-Logo-96.png" alt="logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <p small className="user">
                Signed in as {user.email || 'N/A'}
                    <a href="/user">
                        <span className="edit-info"></span>
                    </a>
                </p>
            </div>
            <button className="btn btn-outline-info my-2 my-sm-0" onClick={onLogout}>Logout</button>
        </nav>
    );
}

export default Topbar;
