import React, {useState} from "react";

function ProfileForm({onSubmit}) {
    const [name, setName]=useState("");
    const [address, setAddress]=useState("");
    const [phone, setPhone]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="form-group">
                        <label>Full Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            placeholder="What shall we call you?"/>
                    </div>
                    <button type="button"
                        className="btn"
                        onClick={e => onSubmit({name})}>
                            <i className="edit-info"></i>
                    </button>
                </div>
                <div div className="row">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className="form-control"
                            placeholder="Email"/>
                    </div>
                    <button type="button"
                        className="btn"
                        onClick={e => onSubmit({email})}>
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
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button"
                        className="btn"
                        onClick={e => onSubmit({password})}>
                            <i className="edit-info"></i>
                    </button>
                </div>
                <div div className="row">
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            type="address"
                            placeholder="Address"
                            className="form-control"
                            value={address}
                            onChange={e => setAddress(e.target.value)} />
                    </div>
                    <button type="button"
                        className="btn"
                        onClick={e => onSubmit({address})}>
                            <i className="edit-info"></i>
                    </button>
                </div>
                <div div className="row">
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="phone"
                            placeholder="phone"
                            className="form-control"
                            value={phone}
                            onChange={e => setPhone(e.target.value)} />
                    </div>
                    <button type="button"
                        className="btn"
                        onClick={e => onSubmit({phone})}>
                            <i className="edit-info"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;