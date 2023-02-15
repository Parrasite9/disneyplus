import React from 'react'
import styled from 'styled-components'
import '../CSS Files/Login.css'

// IMAGE IMPORTS 
// import BGImg from '../Images/login-background.jpg'
// import LogoOne from '../Images/cta-logo-one.svg'

// import BGImg from '../Images/login-background.jpg'
// import LogoOne from '../Images/cta-logo-one.svg'

function Login() {
  return (
    <div className='login'>
        <div className='container'>
            <div className='content'>
                <img className='bgImage' src='/images/login-background.jpg' alt='bg-img' />
                <div className='cta'>
                        <img className='ctaLogoOne' src='/images/cta-logo-one.svg' alt="" />
                        {/* <button className='signUp-button'>SIGN UP</button> */}
                        <a className='signUp-button'>SIGN UP</a>
                </div>
            </div>
        </div>
    </div>

    // <Container>
    //     <Content>
    //         <BGImage />
    //     </Content>
    // </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100vh;
    text-align: center;
    `;

const Content = styled.div`
    margin-bottom: 10vw:
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px; 
    height: 100%;
`;

const BGImage = styled.div`
    background-image: url("src/Images/login-background.jpg");
    height: 100%;
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    `;

export default Login
