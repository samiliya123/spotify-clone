import React from 'react'
import './login.css'
import SpotifyLogo from '../../assets/images/spotify-logo-png-7055.png'
import { loginUrl } from '../../spotify'

const Login = () => {
  return (
    <div className='login'>
        <img src={SpotifyLogo} alt="" />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        
    </div>
  )
}

export default Login
