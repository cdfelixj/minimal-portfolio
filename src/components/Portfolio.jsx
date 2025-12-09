import React from 'react'
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import ExpandableSlider from './ExpandableSlider';
import sliderData from '../data/slider';

export default function Portfolio() {
  return (
    <div className="flex flex-col items-start my-10">
      <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map(project => (
            <PortfolioItem 
                imgUrl= {project.imgUrl}
                title= {project.title}
                stack= {project.stack}
                link= {project.link}
            />
        ))}
      </div>
      
      <div className="w-full mt-16">
        <ExpandableSlider slides={sliderData} />
      </div>
    </div>
  )
}
