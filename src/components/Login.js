import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../Auth";
import "./Login.css"

const Login = () => {

  const [form, setForm] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!form.email || !form.password) {
      alert("Kindly fill both email and password.");
      window.location.reload(false);
      return;
    }
    await login(form);
    setTimeout(() => {
      navigate('/AddStudent');
    }, 1000);
  };

  return (
    <div>
        <div className='Loginpage'>Login</div>
        <form onSubmit={handleSubmit}>
            <label className="Email" for="email">Email</label>
            <input className='LoginFrame92'
                type="email"
                placeholder="Enter Email Address"
                onChange={(event) => setForm({...form, email: event.target.value})}
            />
            
            <label className="Password" for="password">Password</label>
            <input className="LoginFrame94"
                type="password"
                placeholder="Enter Password"
                onChange={(event) => setForm({...form, password: event.target.value})}
            />
            <button className="Loginin" type="submit">Login</button>  
        </form>

    </div>
  );
}

export default Login;