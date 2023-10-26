import React from 'react'
import { Link } from 'react-router-dom'
import back1 from '../assets/back1.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${back1})`}}>
      <div className='headerContainer'><h1>Gamers Zone</h1>
     
     <Link to='/menu'> <button>
        Start Game</button>
        </Link>
        </div> 
    </div>
  )
}

export default Home
