import React from 'react'

export default function Arrow() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
         <a href="#Timeline" >
            <button>
                <svg className="w-6 h-6 text-gray-800 dark:text-white
                w-8 hover:scale-125 duration-200 dark:hover:text-amber-600 hover:text-sky-600
                
                " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                </svg>
            </button>
        </a>
        </div>    
    </div>
  )
}
