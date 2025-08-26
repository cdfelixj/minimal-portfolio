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
        <p className="flex text-justify">A little about my background - I'm Felix Lau Pangestu (also known as Juan Felix Pangestu), of Chinese-Indonesian ethnicity, and went to Rosaryhill Secondary School here in Hong Kong. My Cantonese isn't the greatest but my English is native. Fun fact: I learnt to ride a bike at 21!

        I'm currently pursuing a Bachelor of Science (Hons) in Business Computing & Data Analytics at Hong Kong Baptist University (Sep 2022 - Jun 2026) with a 3.6/4.0 GPA and First Class Honors. I've also had the opportunity to do a Fall Semester Exchange at Nanyang Technological University (Aug 2024 – Dec 2024) on a Fung Scholarship.

        I'm really interested in emerging technologies and how they can be applied to solve real world problems. Some of my recent work includes building RAG pipelines that improved QA accuracy by 25%, adapting 7B LLMs for financial analysis, and developing full-stack solutions that serve thousands of users. My goal is to eventually start my own tech startup focused on developing customer-centric products, but I'm also eager to gain more experience at fast-growing tech companies.

        When I'm not coding, you can find me powerlifting (1058lbs total!), playing rugby for the varsity team, or reading science fiction like "Remembrance of Earth's Past" by Liu Cixin.
        </p>  
        
      </div>
          </div>
      
      </div>
      
    </div>
  )
}
