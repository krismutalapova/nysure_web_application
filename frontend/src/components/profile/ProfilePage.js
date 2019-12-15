import React, { Component } from "react";
import ProfileForm from "./ProfileForm";

class ProfilePage extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="col-10">
                        <ProfileForm user={this.props.user} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;