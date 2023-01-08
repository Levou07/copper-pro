import React from 'react'
import './About.scss'

import signature from '../../img/signature.png'
import copper from '../../img/copper.png'

function About() {
  return (
    <div>
        <div className="about containerM">
          <p>Главная / <b>О нас</b></p>
          <div className='about-div'>
            <div className="about-div-left">
              <h1>О нас</h1>
              <h3><sup>''</sup>Мы любим всё что сделано из меди<sub>,,</sub></h3>
              <div>
                <b>Иван Иванов</b>
                <img src={signature} alt="signature" />
              </div>
            </div>
            <div className="about-div-right">
              <img src={copper} alt="copperImg" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default About