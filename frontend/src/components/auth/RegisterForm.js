import React, {useState} from "react";

function RegisterForm({onSubmit}) {
    const [name, setName] = useState("");
    const [id, setId]=useState("");
    const [address, setAddress]=useState("");
    const [telephone, setTelephone]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Register</h4>
                <div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            placeholder="Name"/>
                    </div>

                    <div className="form-group">
                        <label>Id:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={id}
                            onChange={ e => setId(e.target.value) }
                            placeholder="Id - YYYYMMDD-XXXX"/>
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={ e => setAddress(e.target.value) }
                            placeholder="Address"/>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className="form-control"
                            placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <label>Telephone:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={ e => setTelephone(e.target.value) }
                            className="form-control"
                            placeholder="Telephone"/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-success"
                            onClick={e => onSubmit({name, email, password})}>
                            Create account
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterForm;