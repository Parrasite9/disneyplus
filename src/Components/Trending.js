import React from 'react'
import '../CSS Files/Recommend.css'
import { Link } from 'react-router-dom'


function Trending() {
  return (
    <div className='newDisney'>
        <h4>New to Disney+</h4>

        <div className='recommend-container'>

            {/* ITEM 1  */}
            <div className='recommended-item-container'>
                <Link to="/">
                    <img className='recommended-item' src='/Images/insideOut.jpeg' />
                </Link>
            </div>

            {/* ITEM 2  */}
            <div className='recommended-item-container'>
                <Link to="/">
                    <img className='recommended-item' src='/Images/insideOut.jpeg' />
                </Link>
            </div>
 
             {/* ITEM 3  */}
             <div className='recommended-item-container'>
                <Link to="/">
                    <img className='recommended-item' src='/Images/insideOut.jpeg' />
                </Link>
            </div>
 
             {/* ITEM 4  */}
             <div className='recommended-item-container'>
                <Link to="/">
                    <img className='recommended-item' src='/Images/insideOut.jpeg' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Trending
