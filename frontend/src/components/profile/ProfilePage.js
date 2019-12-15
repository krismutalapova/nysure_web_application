import React from "react";
import UserApi from "../../api/UserApi";

class ProfilePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
        }
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({
                name: this.props.user.name,
                email: this.props.user.email,
                phone: this.props.user.phone,
                password: "",
            })
        }, 400)
    }

    handleSubmit() {
        const updatedUser = { ...this.props.user }
        updatedUser.name = this.state.name
        updatedUser.phone = this.state.phone
        updatedUser.password = this.state.password.length ? this.state.password : this.props.user.password
        UserApi.updateUser(updatedUser)
            .then((res) => {
                this.setState({
                    name: res.data.user.id,
                    email: res.data.user.email,
                    phone: res.data.user.phone,
                    password: ""
                })})
    }

    render() {
        return (
            <div className="card">
                <div className="card-body" style={{ borderRadius: '0px' }}>
                    <label>Username:</label>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="What shall we call you?"
                            className="form-control"
                            style={{ borderRadius: '10px' }}
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        <button
                            type="button"
                            className="btn savebtn"
                            onClick={e => this.handleSubmit()}>
                            <img className="savebtn" src="/icons/save-solid.png" alt="save" />
                        </button>
                    </div>
                </div>

                <div className="card-body" style={{ borderRadius: '0px' }}>
                    <label>Email:</label>
                    <div className="input-group">
                        <input
                            disabled
                            type="text"
                            placeholder="What is your e-mail?"
                            className="form-control"
                            style={{ borderRadius: '10px' }}
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <button
                            disabled
                            type="button"
                            className="btn savebtn"
                            onClick={e => this.handleSubmit()}>
                            <img className="savebtn" src="/icons/save-solid.png" alt="save" />
                        </button>
                    </div>
                </div>

                <div className="card-body" style={{ borderRadius: '0px' }}>
                    <label>Phone:</label>
                    <div className="input-group">
                        <input
                            type="number"
                            placeholder="What is your phone number?"
                            className="form-control"
                            style={{ borderRadius: '10px' }}
                            value={this.state.phone}
                            onChange={e => this.setState({ phone: e.target.value })}
                        />
                        <button type="button"
                            className="btn savebtn"
                            onClick={e => this.handleSubmit()}>
                            <img className="savebtn" src="/icons/save-solid.png" alt="save" />
                        </button>
                    </div>
                </div>

                <div className="card-body" style={{ borderRadius: '0px' }}>
                    <label>Password:</label>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control"
                            style={{ borderRadius: '10px' }}
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <button type="button"
                            className="btn savebtn"
                            onClick={e => this.handleSubmit()}>
                            <img className="savebtn" src="/icons/save-solid.png" alt="save" />
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProfilePage;