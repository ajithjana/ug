import MenuItem  from '../components/MenuItem'
import React from 'react'
import { Link } from 'react-router-dom'
import { Data } from '../data/data'
import '../styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
   
    <div className='menuList'>
     <a href='https://quiz1-eight.vercel.app/' target='_blank'> {Data.map((menuItem, key) => {
          return <MenuItem name={menuItem.name} price={menuItem.price} image={menuItem.image}  key={key} />
      })}
      </a>
    </div>
    </div>
  )
}

export default Menu
