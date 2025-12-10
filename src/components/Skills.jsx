import React from 'react'
import skills from '../data/skills'
import Title from './Title'
export default function Skills() {
  const categories = [
    { title: 'Languages', data: skills.languages },
    { title: 'Frameworks & Libraries', data: skills.frameworksLibraries },
    { title: 'Data & Analytics', data: skills.dataAnalytics },
    { title: 'Cloud & Dev Tools', data: skills.cloudDevTools }
  ]

  return (
    <div className="py-16">
      <Title>Skills</Title>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="bg-gray-50 dark:bg-stone-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-bold mb-3 dark:text-white border-b border-gray-200 dark:border-stone-700 pb-2">
              {category.title}
            </h3>
            
            <div className="space-y-2">
              {category.data.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-amber-600 transition-colors duration-200"
                >
                  <i className={`${skill.icon} text-xl`}></i>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
