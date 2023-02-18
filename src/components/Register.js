import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Register.css";
import {register} from '../Auth'


const Register = () => {
    const [error] = useState(null);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email:'',
        password:''
      })

    const handleRegister = async (event) => {
        event.preventDefault();
        if(!form.email || !form.password) {
            alert("Kindly fill both email and password.");
            window.location.reload(false);
            return;
        }
        await register(form);
        setTimeout(() => {
            navigate('/Login');
        }, 3000);
    };

    return (
        <div>
            <div className='Registerpage'>Register</div>
            <form onSubmit={handleRegister}>
                <label className="Email" for = "email">Email</label>
                <input className='LoginFrame92'
                    type="email"
                    placeholder="Enter Email Address"
                    onChange={(event) => setForm({...form, email: event.target.value})}
                />
                
                <label className="Password" type="password">Password</label>
                <input className="LoginFrame94"
                    type="password"
                    placeholder="Enter Password (Minimum length - 6)"
                    onChange={(event) => setForm({...form, password: event.target.value})}
                />
                <button className="Registerin" type="submit">Register</button>
                {error && <p>{error}</p>}
                <p className='changing'>
                    Already have an account ? <Link to="/Login">Login</Link>
                </p>
                
            </form>
        </div>
    );
}

export default Register;