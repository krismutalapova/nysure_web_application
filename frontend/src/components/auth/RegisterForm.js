import React, {useState} from "react";
import useForm from "react-hook-form";

function RegisterForm({onSubmit}) {
    const [name, setName] = useState("");
    const [id, setId]=useState("");
    const [address, setAddress]=useState("");
    const [telephone, setTelephone]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, handleSubmit, errors } = useForm();

    window.errors=errors
    
    return (
        <div className="card" >
            <div className="card-body">
                <h4 className="card-title">Register</h4>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            name="name"
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            placeholder="Name"
                            ref={register({ required: true})}/>
                    </div>
                            {/* error message */}
                            {errors.name && <p>name required</p>}

                    <div className="form-group">
                        <label>Id:</label>
                        <input 
                            name="id"
                            type="text"
                            className="form-control"
                            value={id}
                            onChange={ e => setId(e.target.value) }
                            placeholder="YYYYMMDD-XXXX"
                            ref={register({ required: true, maxLength: 13 })}/>
                    </div>
                            {/* error message */}
                            {errors.name && <p>id required</p>}

                    <div className="form-group">
                        <label>Address:</label>
                        <input 
                            name="address"
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={ e => setAddress(e.target.value) }
                            placeholder="Address"
                            ref={register({ required: true, minLength: 5 })}/>
                    </div>
                            {/* error message */}
                            {errors.name && <p>address required</p>}

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            name="email"
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className="form-control"
                            placeholder="Email"
                            ref={register({ required: true})}/>
                    </div>
                             {/* error message/email validation for input and "@"*/}
                            {errors.email && errors.email.type === "@" && <p>email required</p>}

                    <div className="form-group">
                        <label>Telephone:</label>
                        <input
                            name="telephone"
                            type="text"
                            value={telephone}
                            onChange={ e => setTelephone(e.target.value) }
                            className="form-control"
                            placeholder="Telephone"
                            ref={register({ required: true, maxLength: 11 })}/>
                    </div>
                            {/* error message */}
                            {errors.name && <p>telephone required</p>}

                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            name="password"
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            ref={register({ required: true, minLength: 10 })}/>
                    </div>
                            {/* error message */}
                            {errors.password && <p>password required</p>}

                    <div className="form-group">
                        <button 
                        type="submit" 
                            className="btn btn-success">
                          {/*onClick={e => onSubmit({id, name, email, password, address, telephone})}>*/}
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