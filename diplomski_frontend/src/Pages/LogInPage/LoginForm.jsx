import React from 'react'
import './LoginStyle.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from "react";

export default function LoginForm() {
   const navigate = useNavigate();
   const onRegisterSubmit = ()=>{
      navigate("/registration");
   }
    return (
        <div className='login'> 
            <div class="login-container">
                <form className='login-form'>
                    <div class="form-group">
                        <label for="email" className='login-label'>Email</label>
                        <input type="text" id="username" name="username" className='login-input' />
                    </div>
                    <div class="form-group">
                        <label for='password' className='login-label'>Lozinka</label>
                        <input type='password' id='password' name='password' className='login-input' />
                    </div>
                    <div className='button-container'>
                        <button type="submit" className='login-btn'>Prijavi se</button>
                        <button type="submit" className='register-btn' onClick={onRegisterSubmit}>Registruj se</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
