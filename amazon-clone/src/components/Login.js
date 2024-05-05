import React from 'react'
import { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'


function Login() {

    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');

  return (
    <div className='login'>

        <Link to='/'>
            <img className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            >
            </img>
        </Link>

        <div className='login__container'>
            <h1>Sign In</h1>

            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' className='login__signInButton'>Sign In</button>
            </form>

            <p>By sign in you agree to view amazon clone terms and conditions of use of sales
                Please see our privacy policies , our cookies Notice and our Internet Based Ads Notice.    
            </p>

            <button className='login__registerButton'>Create your Amazon Account</button>

        </div>

      
    </div>
  )
}

export default Login
