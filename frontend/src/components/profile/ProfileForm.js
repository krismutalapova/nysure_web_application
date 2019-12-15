import React, { useState } from "react";
import UserApi from "../../api/UserApi";



class ProfileForm extends React.Component {

    state = {
        name: "",
        password: "",
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                name: this.props.user.name,
                password: "",
            })
        }, 400)

    }

    handleSubmit() {
        const updatedUser = { ...this.props.user }
        updatedUser.name = this.state.name
        updatedUser.password = this.state.password.length ? this.state.password : this.props.user.password
        UserApi.updateUser(updatedUser)
            .then(() => {
                window.location.reload()
            })
    }

    render() {

        return (
            <div className="card">
                <div className="card-body">
                    <label>Username:</label>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="What shall we call you?" 
                            className="form-control"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />      
                    </div>
                    <button
                        type="button"
                        className="btn savebtn"
                        onClick={e => this.handleSubmit()}>
                        <img className="savebtn" src="/icons/save-solid.png" alt="save" />
                    </button>
                </div>

                <div className="card-body">
                    <label>Password:</label>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <button type="button"
                        className="btn savebtn"
                        onClick={e => this.handleSubmit()}>
                        <img className="savebtn" src="/icons/save-solid.png" alt="save" />
                    </button>
                </div>
            </div>

        );
    }
}

export default ProfileForm;