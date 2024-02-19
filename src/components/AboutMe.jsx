import React from 'react'
import Title from './Title'
import Card from './Card'


export default function AboutMe() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center my-10 mb-15">
          <div className="w-full md:w-7/12">
          <div className="flex justify-center items-center p-12">
            <Card/>
        </div>
          <Title>About me</Title>
      <div className='flex flex-col md:flex-row gap-12'>
        <p className="flex text-justify">A little about my background - I'm of Chinese-Indonesian ethnicity and went to Rosaryhill Secondary School here in Hong Kong. My Cantonese isn't the greatest but my English is native.

        On the academic side of things, I'm really interested in emerging technologies and how they can be applied to solve real world problems. Some of my projects include creating Chatbots using LangChain as well as building a Discord bot for user management. I'm also hoping to gain work experience through internships at fast growing tech companies. My goal is to eventually start my own tech startup focused on developing customer-centric products.
        </p>  
        
      </div>
          </div>
      
      </div>
      
    </div>
  )
}
