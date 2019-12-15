import React, {useState} from "react";

function RegisterForm({onSubmit}) {
    const [id, setId]=useState("");
    const [name, setName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="border-0">
            <div className="modal-dialog border-0">
                    <div className="form-group regCard">
                        <label>Personnummer:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={id}
                            onChange={ e => setId(e.target.value) }
                            placeholder="YYYYMMDD-XXXX"/>
                    </div>
                    <div className="form-group regCard">
                        <label>Username:</label>
                        <input
                            type="name"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            className="form-control"
                            placeholder="What do you want to be called?"/>
                    </div>
                    <div className="form-group regCard">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className="form-control"
                            placeholder="Email"/>
                    </div>

                    <div className="form-group regCard">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="modal-footer border-0">
                        <button
                            className="btn btn-success btn-block"
                            data-dismiss="modal"
                            onClick={e => onSubmit({id, name, email, password})}>
                            Create account
                        </button>
                    </div>
            </div>
        </div>
    );
}

export default RegisterForm;