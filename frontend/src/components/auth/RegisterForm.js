import React, {useState} from "react";
import useForm from "react-hook-form";


function RegisterForm({onSubmit}) {
    const [id, setId]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, errors } = useForm();


    
    return (
        <div className="card" >
            <div className="card-body">
                <h4 className="card-title">Register</h4>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group" >
                        <label>Personnummer</label>
                        <input 
                            pattern= {'[0-9]{8}\-[0-9]{4}'}
                            maxLength="13"
                            name="id"
                            type="text"
                            className="form-control"
                            value={id}
                            onChange={ e => setId(e.target.value) }
                            placeholder="YYYYMMDD-XXXX"
                            ref={register({ required: "required field", maxLength: 13 })}/>
                    </div>
                             {/* error message */}
                            {errors.id && errors.id.message}
                            {errors.id && errors.id.type === "maxLength" && "max length 13"}

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
                             {/* error message/email validation for input and "@"*/}
                            {errors.email && errors.email.message}
                            {errors.email && errors.email.type === "@" }

                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            minLength="10"
                            maxLength="15"
                            name="password"
                            type="password" 
                            value={password}
                            onChange={ e => setPassword(e.target.value)} 
                            placeholder="password" 
                            className="form-control" 
                            ref={register({ required:"required field", maxLength:8})}/>
                    </div>
                            {/* error message */}
                            {errors.password && errors.password.message}
                            {errors.password && errors.password.type === "maxLength"}

                    <div className="form-group">
                        <button 
                        type="submit" 
                            className="btn btn-success">
                          {/*onClick={e => onSubmit({id, email, password})}*/}
                            Create account
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;