import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

export default function Timeline( {duration, title, company, details}) {
  return (
    <div className="flex flex-col md:flex-row my-20">
         <div className="w-full">
          <Title>Timeline</Title>
          {timeline.map(item => (
            <TimelineItem
            duration={item.duration}
            title={item.title}
            company={item.company}
            details={item.details}
            logo={item.logo}
            />
        ))}
      </div>
    </div>
  )
}
