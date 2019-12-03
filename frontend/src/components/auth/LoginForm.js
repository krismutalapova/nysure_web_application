import React, {useState} from 'react';
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import useForm from "react-hook-form";

function LoginForm({onSubmit}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, errors } = useForm();

//       <script>document.getElementById("submitButtonRegister").click(); </script>

    return (
        <div>
            <div className="logincard">
                <h4 className="card-title" >Login</h4>
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                                className="form-control"
                                placeholder="email"
                                ref={register({ required: "required field"})}/>
                        </div>
                               
                        {errors.email && errors.email.message}
                        {errors.email && errors.email.type === "@" }

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={ e => setEmail(e.target.value) }
                                className="form-control"
                                placeholder="email"
                                ref={register({ required: "required field"})}/>
                        </div>
                               
                        {errors.email && errors.email.message}
                        {errors.email && errors.email.type === "@" }

						<div class="contact100-form-checkbox">
							<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
							<label class="label-checkbox100" htmlFor="ckb1">
								Remember me
							</label>
						</div>

						<div>
							<a href="#" class="txt1">
								Forgot Password?
							</a>
						</div>

                    <div className="form-group">
                        
                    <input
                            type="submit"
                            className="btn btn-success btn-block"
                            value="Login"
                            />    
                            </div>
                        </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;