import React from 'react'
import History from '../../components/History/History'
import Map from '../../components/Map/Map'
import './Body.scss'

function Body() {
  return (
    <div>
        <div className="bgD">
          <History/>
        </div>
        <div className="bg">
          <Map/>
        </div>
    </div>
  )
}

export default Body