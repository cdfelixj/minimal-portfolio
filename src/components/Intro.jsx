import React from 'react'
import CV from "/public/assets/Juan-Felix-Pangestu_CV.pdf"

export default function Intro() {
  return (
    <div className ="flex items-center justify-center flex-col text-justify pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">cdfelix</h1>
      <p className="text-base md:text-xl mb-3 font-medium">Student & Aspiring SWE</p>
      <p className="text-sm max-w-xl mb-6 font-bold"> Hi! My name is Juan Felix Pangestu. I'm an aspiring software engineer currently a student at Hong Kong Baptist University studying BSc(Hons) in Business Computing & Data Analytics. My interest lies in software that could be use in finance and machine learning.  </p>

      <a href={CV} without rel="noopener noreferrer" target="_blank">
        <button
        class="text-zinc-700 hover:text-zinc-200 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md py-2 px-6 shadow hover:shadow-zinc-400 duration-700"
        >

        CV
        </button>
      </a>

    </div>
  )
}
