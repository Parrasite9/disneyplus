import React from 'react'
import styled from 'styled-components'
import '../CSS Files/Login.css'

// IMPORTED COMPONENTS 
import Header from './Header'

function Login() {
  return (
    <div className='login'>
        <Header />
        
        <div className='container'>
            <div className='content'>
                <img className='bgImage' src='/images/login-background.jpg' alt='bg-img' />
                <div className='cta'>
                        <img className='ctaLogoOne' src='/images/cta-logo-one.svg' alt="" />
                        <a className='signUp-button'>SIGN UP</a>
                        <h2 className='description'>Get Premier Access to Raya and the Last Dragon for an addition fee with Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1</h2>
                        <img className='ctaLogoTwo' src='/images/cta-logo-two.png' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
