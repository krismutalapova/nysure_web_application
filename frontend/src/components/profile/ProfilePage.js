import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import UserApi from "../../api/UserApi.js";

class ProfilePage extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-6 " style={{color: "transparent"}}>
                            <img alt="profile pic"
                                className="img-circle"
                                src="images/alberto.jpg"
                                />
                            <p>ID</p>
                        </div>

                        <div className="card-body">
                            <div>
                                <div className="col-12  strong-shadow">
                                    <ProfileForm user={ this.props.user }/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;