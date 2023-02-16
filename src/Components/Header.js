import React from 'react'
import '../CSS Files/Header.css'
import { auth, provider } from '../Firebase/Firebase'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName, selectUserEmail, selectUserPhoto, setUserLoginDetails,  } from '../Features/Users/userSlice'
import Store from '../App/Store'

function Header() {

    const dispatch = useDispatch()      // ALLOWS US TO USE DISPATCH
    const navigate = useNavigate()        // ALLOWS US TO ACCESS HISTORY

    // ANYTIME YOU SEE useSelector, WE ARE GOING INTO THE Store.JS AND ACCESSING THE DATA 
    const username = useSelector(selectUserName)    // USES THE useSelector TO HAVE ACCESS TO THE USERNAME 
    const userPhoto = useSelector(selectUserPhoto)  // USES THE useSelector TO HAVE ACCESS TO THE PHOTO

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
            setUser(result.user)
        }).catch((error) => {
            alert(error.message)
        })
    }

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
            <div className='navbar'>
                <a href='/home' className='navlink'><img  src='/images/home-icon.svg' className='nav-img' /><span>HOME</span></a>
                <a href='#' className='navlink'><img src='/images/search-icon.svg' className='nav-img' /><span>SEARCH</span></a>
                <a href='#' className='navlink'><img src='/images/watchlist-icon.svg' className='nav-img' /><span>WATCHLIST</span></a>
                <a href='#' className='navlink'><img src='/images/original-icon.svg' className='nav-img' /><span>ORIGINALS</span></a>
                <a href='#' className='navlink'><img src='/images/movie-icon.svg' className='nav-img' /><span>MOVIES</span></a>
                <a href='#' className='navlink'><img src='/images/series-icon.svg' className='nav-img' /><span>SERIES</span></a>
            </div>
            <a className='header-button' onClick={handleAuth}>LOGIN</a>
        </div>
    </div>
  )
}

export default Header
