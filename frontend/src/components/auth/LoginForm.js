import React, {useState} from 'react';

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

//       <script>document.getElementById("submitButtonRegister").click(); </script>

    return (
    
            <div>
                
                <div>
                    <div className="form-group">
                        <label className="text-white">Email:</label>
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label className="text-white">Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-outline-info my-2 btn-block"
                            onClick={() => onSubmit({email, password})}>
                            <strong>Login</strong>
                        </button>
                    </div>
                </div>
            </div>

    );


}

export default LoginForm;