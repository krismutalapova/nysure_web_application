import React from 'react';

function Topbar({ onLogout, user }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark topBar">
            <a className="navbar-brand" href="/" alt="Home">
                <img 
                    src="/images/NySureLogoWhite.png" 
                    style={{ width: "140px", height: "auto" }} 
                    alt="logo" />
            </a>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <p className="user">
                    Welcome &nbsp; 
                    <strong style={{fontSize: "25px"}}>   
                        {user.name || user.email } ,
                    </strong>
                    <br></br>
                    what would you like to keep safe today?

                </p>
            </div>
            <div className="userContainer">
                <a href="/profile">
                    <img 
                        className="profileIcon" 
                        src="/icons/user-circle-solid.png" 
                        style={{ width: "40px", height: "40px" }} 
                        alt="Edit User"
                    />
                    <div className="middle">
                        <div className="text">Edit User</div>
                    </div>
                </a>
            </div>
            <button 
                className="btn btn-outline-info my-2 my-sm-0" 
                onClick={onLogout}>
                    Logout
            </button>
        </nav>
    );
}

export default Topbar;
