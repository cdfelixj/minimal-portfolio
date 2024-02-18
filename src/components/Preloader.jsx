import React, {useEffect} from 'react'
import '/src/styles/preloader.css'
import {preLoaderAnim} from '/src/animations/preloaderAnims.jsx'

const PreLoader = () => {

    useEffect(() =>{
        preLoaderAnim()

    },[]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span></span>
        <span>cdfelixj</span>
        <span></span>
      </div>
    </div>
  )
}

export default PreLoader
