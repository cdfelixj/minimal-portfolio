import React from 'react'
import Title from './Title'
import Card from './Card'
import aboutme from '../data/aboutme'

export default function AboutMe() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center my-10 mb-15">
          <div className="w-full md:w-7/12">
          <div className="flex justify-center items-center p-12">
            <Card/>
        </div>
          <Title>{aboutme.title}</Title>
      <div className='flex flex-col md:flex-row gap-12'>
        {aboutme.paragraphs.map((paragraph, index) => (
          <p key={index} className="flex text-justify">{paragraph}</p>
        ))}
      </div>
          </div>
      
      </div>
      
    </div>
  )
}
