import React, { useEffect } from 'react'
import '../CSS Files/Header.css'
import { auth, provider } from '../Firebase/Firebase'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails, setSignOutState,  } from '../Features/Users/userSlice'
import Store from '../App/Store'
import { async } from '@firebase/util'

function Header() {

    const dispatch = useDispatch()      // ALLOWS US TO USE DISPATCH
    const navigate = useNavigate()        // ALLOWS US TO ACCESS HISTORY

    // ANYTIME YOU SEE useSelector, WE ARE GOING INTO THE Store.JS AND ACCESSING THE DATA 
    const userName = useSelector(selectUserName)    // USES THE useSelector TO HAVE ACCESS TO THE USERNAME 
    const userPhoto = useSelector(selectUserPhoto)  // USES THE useSelector TO HAVE ACCESS TO THE PHOTO

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) { // IF USER EXIST OR LOGGED IN 
                setUser(user)
                console.log(user);
                navigate('/home') // GO TO HOME PAGE
            }
        })
    }, [userName])

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                console.log(result);
                setUser(result.user) // THIS WILL ALLOW YOU TO SET A NEW USER 
            }).catch((error) => {
                alert(error.message)
                })
            } else if (userName) {
                auth.signOut().then(() => { // SIGN USER OUT
                    dispatch(setSignOutState())
                    navigate('/') // REROUTE THEM BACK TO THE LOGIN PAGE
                }).catch((err) => alert(err.message))
            }
        }


    // THE FUNCTION FOR CREATING A NEW USER 
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

  return (
    <div className='header'>
        <div className='header-container'>
            <a className='logo' href='#'><img src='/images/logo.svg' alt='' /></a>
            {
                !userName ? (
                    <a className='header-button' onClick={handleAuth}>LOGIN</a>
                ) : (
                <>
                    <div className='navbar'>
                        <a href='/home' className='navlink'><img  src='/images/home-icon.svg' className='nav-img' /><span>HOME</span></a>
                        <a href='#' className='navlink'><img src='/images/search-icon.svg' className='nav-img' /><span>SEARCH</span></a>
                        <a href='#' className='navlink'><img src='/images/watchlist-icon.svg' className='nav-img' /><span>WATCHLIST</span></a>
                        <a href='#' className='navlink'><img src='/images/original-icon.svg' className='nav-img' /><span>ORIGINALS</span></a>
                        <a href='#' className='navlink'><img src='/images/movie-icon.svg' className='nav-img' /><span>MOVIES</span></a>
                        <a href='#' className='navlink'><img src='/images/series-icon.svg' className='nav-img' /><span>SERIES</span></a>
                    </div>

                    {/* <img className='profile-pic' src={userPhoto}  /> */}
                    
                    <div className='avatar-section'>
                        <img className='profile-pic' src={userPhoto}  />
                        <span className='drop-link' onClick={handleAuth}>Sign Out</span>
                    </div>
                    
                </>
                )
            }
            {/* <div className='navbar'>
                <a href='/home' className='navlink'><img  src='/images/home-icon.svg' className='nav-img' /><span>HOME</span></a>
                <a href='#' className='navlink'><img src='/images/search-icon.svg' className='nav-img' /><span>SEARCH</span></a>
                <a href='#' className='navlink'><img src='/images/watchlist-icon.svg' className='nav-img' /><span>WATCHLIST</span></a>
                <a href='#' className='navlink'><img src='/images/original-icon.svg' className='nav-img' /><span>ORIGINALS</span></a>
                <a href='#' className='navlink'><img src='/images/movie-icon.svg' className='nav-img' /><span>MOVIES</span></a>
                <a href='#' className='navlink'><img src='/images/series-icon.svg' className='nav-img' /><span>SERIES</span></a>
            </div> */}
            {/* <a className='header-button' onClick={handleAuth}>LOGIN</a> */}
        </div>
    </div>
  )
}

export default Header
