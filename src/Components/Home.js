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

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../Firebase/Firebase'
import { setMovies } from '../Features/Movie/movieSlice'
import { selectUserName } from '../Features/Users/userSlice'


function Home() {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []

    useEffect(() => {
        db.collection('movies').onSnapshot((snapshot) => {
            snapshot.docs.map((doc) => {
                console.log(recommends);
                switch(doc.data().type) {
                    case 'recommend' :
                        recommends = [...recommends, { id: doc.id, ...doc.data()}]
                        break;
                    case 'new':
                        newDisneys = [...newDisneys, { id: doc.id, ...doc.data()}]
                        break;
                    case 'originals' :
                        originals = [...originals, { id: doc.id, ...doc.data()}]
                        break;
                    case 'trending':
                        trending = [...trending, { id: doc.id, ...doc.data()}]
                        break;
                    
                }
            })

            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            }))
        })
    }, [userName])

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
