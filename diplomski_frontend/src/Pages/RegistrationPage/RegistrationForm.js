import React from 'react'
import './RegistrationStyle.css'

export default function RegistrationForm() {
  return (
    <div className='registration'>
    <div class="register-container">
        <form className='register-form'>
            <div class="form-group">
                <label for="username" className='register-label'>Ime</label>
                <input type="text" id="username" name="username" className='register-input' />
            </div>
            <div class="form-group">
                <label for="lastname" className='register-label'>Prezime</label>
                <input type="text" id="lastname" name="lastname" className='register-input' />
            </div>
            <div class="form-group">
                <label for="email" className='register-label'>Email</label>
                <input type="text" id="email" name="email" className='register-input' />
            </div>
            <div class="form-group">
                <label for='password' className='register-label'>Lozinka</label>
                <input type='password' id='password' name='password' className='register-input' />
            </div>
            <div className='button-container'>
                <button type="submit" className='main-register-btn'>Registruj se</button>
            </div>
        </form>
    </div>
</div>
  )
}
