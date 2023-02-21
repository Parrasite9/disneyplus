import React from 'react'
import '../CSS Files/Recommend.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectRecommend } from '../Features/Movie/movieSlice'


function Recommend() {

    const movies = useSelector(selectRecommend) // ALLOWS TO GO TO THE STORE AND PULL THINGS OUT

  return (
    <div className='recommend'>
        <h4>Recommended for You</h4>

        <div className='recommend-container'>
            {
                movies && movies.map((movie, key) => (
                    <div className='recommended-item-container' key={key} >
                        {movie.id}
                        <Link to={'/detail/' + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Recommend




            // {/* ITEM 1  */}
            // <div className='recommended-item-container'>
            //     <Link to="/">
            //         <img className='recommended-item' src='/Images/insideOut.jpeg' />
            //     </Link>
            // </div>

            // {/* ITEM 2  */}
            // <div className='recommended-item-container'>
            //     <Link to="/">
            //         <img className='recommended-item' src='/Images/insideOut.jpeg' />
            //     </Link>
            // </div>
 
            //  {/* ITEM 3  */}
            //  <div className='recommended-item-container'>
            //     <Link to="/">
            //         <img className='recommended-item' src='/Images/insideOut.jpeg' />
            //     </Link>
            // </div>
 
            //  {/* ITEM 4  */}
            //  <div className='recommended-item-container'>
            //     <Link to="/">
            //         <img className='recommended-item' src='/Images/insideOut.jpeg' />
            //     </Link>
            // </div>
