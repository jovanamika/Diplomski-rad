import React from 'react'
import './LoginStyle.css'

export default function LoginForm() {
    return (
        <div className='login'>
            <div class="login-container">
                <h2>Prijavi se</h2>
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
                    </div>
                </form>
            </div>
        </div>
    )
}
