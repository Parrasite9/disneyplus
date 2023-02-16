import React from 'react'
import Header from './Header'
import '../CSS Files/Home.css'
import ImgSlider from './ImgSlider'
// import bgimg from 'public/Images/home-background.png'


function Home() {
  return (
    <div className='home'>
      <Header />

      <div className='home-container'>
        {/* <img className='home-bg-img' src='/Images/home-background.png' /> */}
        <ImgSlider />
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
      </div>
    </div>
  )
}

export default Home
