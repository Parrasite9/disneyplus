import React from 'react'
import '../CSS Files/Viewers.css'

function Viewers() {
  return (
    <div className='viewers'>
        <div className='viewers-container'>
            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-disney.png' />
                    <video className="viewerVid" autoPlay={true} loop={true} playsInline={true} >
                        <source src='/Videos/disney.mp4' />
                    </video>
                </a>
            </div>

            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-marvel.png' />
                    <video className="viewerVid" autoPlay={true} loop={true} playsInline={true} >
                        <source src='/Videos/marvel.mp4' />
                    </video>
                </a>
            </div>

            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-pixar.png' />
                    <video className="viewerVid" autoPlay={true} loop={true} playsInline={true} >
                        <source src='/Videos/pixar.mp4' />
                    </video>
                </a>
            </div>

            {/* STAR WARS  */}
            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-starwars.png' />
                    <video className="viewerVid" autoPlay={true} loop={true} playsInline={true} >
                        <source src='/Videos/star-wars.mp4' />
                    </video>
                </a>
            </div> 

            {/* NATIONAL GEOGRAPHIC  */}
            <div className='viewItem'>
                <a>
                    <img className='viewImg' src='/Images/viewers-national.png' />
                    <video className="viewerVid" autoPlay={true} loop={true} playsInline={true} >
                        <source src='/Videos/geographic.mp4' />
                    </video>
                </a>
            </div> 

        </div>
    </div>
  )
}

export default Viewers
