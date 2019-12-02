import React, {useState} from "react";

function RegisterForm({onSubmit}) {
    const [id, setId]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                    <div className="form-group">
                        <label>Personnummer:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={id}
                            onChange={ e => setId(e.target.value) }
                            placeholder="YYYYMMDD-XXXX"/>
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
                            className="btn btn-success btn-block"
                            onClick={e => onSubmit({id, email, password})}>
                            Create account
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default RegisterForm;