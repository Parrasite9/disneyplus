import React from 'react'
import '../CSS Files/ImgSlider.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


// THIS IS STRAIGHT TEMPLATE FROM 
// https://react-slick.neostack.com/docs/get-started

function ImgSlider(props) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

  return (
    <div className='imgSlider'>
      <Slider {...settings} >
        <div className='slideItem'>
            <a>
                <img className='sliderImg' src='/Images/slider-badag.jpg' />
            </a>
        </div>

        <div className='slideItem'>
            <a>
                <img className='sliderImg' src='/Images/slider-badging.jpg' />
            </a>
        </div>

        <div className='slideItem'>
            <a>
                <img className='sliderImg' src='/Images/slider-scale.jpg' />
            </a>
        </div>

            <div className='slideItem'>
            <a>
                <img className='sliderImg' src='/Images/slider-scales.jpg' />
            </a>
        </div> 
      </Slider>
    </div>
  )
}

export default ImgSlider 


{/* <div className='slideItem'>
<a>
    <img src='/Images/slider-badag.jpg' />
</a>
</div>
<div className='slideItem'>
<a>
    <img src='/Images/slider-badging.jpg' />
</a>
</div>
<div className='slideItem'>
<a>
    <img src='/Images/slider-scale.jpg' />
</a>
</div>
<div className='slideItem'>
<a>
    <img src='/Images/slider-scales.jpg' />
</a>
</div> */}


        // <div>
        //     <h3>1</h3>
        // </div>
        // <div>
        //     <h3>2</h3>
        // </div>
        // <div>
        //     <h3>3</h3>
        // </div>
        // <div>
        //     <h3>4</h3>
        // </div>
        // <div>
        //     <h3>5</h3>
        // </div>
        // <div>
        //     <h3>6</h3>
        // </div>