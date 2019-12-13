import React, { useState } from "react";
import UserApi from "../../api/UserApi";



class ProfileForm extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                name: this.props.user.name,
                email: this.props.user.email,
                password: "",
            })
        }, 400)
       
    }

     handleSubmit() {
        const updatedUser = {...this.props.user}
        updatedUser.name = this.state.name
        updatedUser.email = this.state.email
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
                    <div className="row">
                        <div className="form-group">
                            <label>Full Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={e => this.setState({ name: e.target.value })}
                                placeholder="What shall we call you?" />
                        </div>
                        <button type="button"
                            className="btn"
                            onClick={e => this.handleSubmit()}>
                            <i className="edit-info"></i>
                        </button>
                    </div>
                    <div div className="row">
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={e => this.setState({ email: e.target.value })}
                                className="form-control"
                                placeholder="Email" />
                        </div>
                        <button type="button"
                            className="btn"
                            onClick={e => this.handleSubmit()}>
                            <i className="edit-info"></i>
                        </button>
                    </div>
                    <div div className="row">
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                value={this.state.password}
                                onChange={e => this.setState({ password: e.target.value })}
                            />
                        </div>
                        <button type="button"
                            className="btn"
                            onClick={e => this.handleSubmit()}>
                            <i className="edit-info"></i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileForm;