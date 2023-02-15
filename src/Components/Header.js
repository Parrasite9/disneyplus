import React from 'react'
import '../CSS Files/Header.css'

function Header() {
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
            <a className='header-button'>LOGIN</a>
        </div>
    </div>
  )
}

export default Header
