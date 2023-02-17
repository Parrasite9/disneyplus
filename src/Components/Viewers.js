import React from 'react'
import '../CSS Files/Viewers.css'

function Viewers() {
  return (
    <div className='viewers'>
        <div className='viewers-container'>
            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-disney.png' />
                </a>
            </div>

            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-marvel.png' />
                </a>
            </div>

            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-pixar.png' />
                </a>
            </div>

            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-starwars.png' />
                </a>
            </div> 

            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-national.png' />
                </a>
            </div> 

        </div>
    </div>
  )
}

export default Viewers
