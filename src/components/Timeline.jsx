import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

export default function Timeline( {year, title, duration, details}) {
  return (
    <div className="flex flex-col md:flex-row my-20">
         <div className="w-full">
          <Title>Timeline</Title>
          {timeline.map(item => (
            <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            />
        ))}
      </div>
    </div>
  )
}
