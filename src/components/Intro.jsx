import React from 'react'
import intro from '../data/intro'
import Card from './Card'

export default function Intro() {
  return (
    <div className ="flex items-start flex-col text-left pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        {intro.name}
        <span className="blinking-cursor">|</span>
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">{intro.title}</p>
      <p className="text-sm mb-6 font-bold">{intro.description}</p>

      
      <div className="flex items-center gap-5">
          {intro.socials.map((social, index) => (
            <div className="group relative" key={index}>
              <a href={social.url}>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-8 hover:scale-125 duration-200 dark:fill-white dark:hover:fill-amber-600 hover:fill-sky-600">
                    <path d={social.icon}/>
                  </svg>
                </button>
              </a>
            </div>
          ))}
      </div>
      <div className="w-full flex justify-center">
          <Card />
      </div>
      
      <div className="w-full flex justify-center mt-8">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          className="scroll-arrow dark:fill-white fill-stone-900"
        >
          <path d="M12 17.414L3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/>
        </svg>
      </div>
    </div>
  )
}
