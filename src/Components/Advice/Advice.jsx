import './Advice.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

const Advice = () => {
    const [advice, setAdvice] = useState('')
    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
            console.log(response)
            })
            .catch((error) => {
            console.log(error)
        })
    }, [])
  return (
      <div className='Advice' >
          
          <div className='Advice-Card' >
              <h1>{advice} </h1>
              <button className='Advice-button'  >Click for Advice</button>
          </div>
    </div>
  )
}

export default Advice