import React from 'react'
import Clients from '../../components/Clients/Clients'
import About from '../../components/About/About'
import './Header.scss'

function Header() {
  return (
    <div>
        <div className="bg">
          <About/>
        </div>
        <Clients/>
    </div>
  )
}

export default Header