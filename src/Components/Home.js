import React from 'react'
import Header from './Header'
import '../CSS Files/Home.css'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Recommend from './Recommend'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
// import bgimg from 'public/Images/home-background.png'


function Home() {
  return (
    <div className='home'>
      <Header />

      <div className='home-container'>
        {/* <img className='home-bg-img' src='/Images/home-background.png' /> */}
        <div className='carasoul'>
            <ImgSlider />
        </div>
        <Viewers />
        <Recommend />
        <NewDisney />
        <Originals />
        <Trending />
        <h1>HELLO WORLD</h1>
        <h1>HELLO WORLD</h1>
      </div>
    </div>
  )
}

export default Home
