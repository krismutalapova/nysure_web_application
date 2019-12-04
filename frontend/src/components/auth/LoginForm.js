import React, {useState} from 'react';

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

//       <script>document.getElementById("submitButtonRegister").click(); </script>

    return (
        <div>
            <div className="logincard">
                <h4 className="card-title" >Login</h4>
                <div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
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

						<div className="contact100-form-checkbox">
							<input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
							<label className="label-checkbox100" htmlFor="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="/" className="txt1">
								Forgot Password?
							</a>
						</div>

                    <div className="form-group">
                        <button 
                            className="btn btn-secondary btn-block"
                            onClick={() => onSubmit({email, password})}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;