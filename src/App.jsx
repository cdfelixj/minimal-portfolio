import React, { useState } from 'react';
import DetailedProjectsView from './components/DetailedProjectsView';
import DetailedExperienceView from './components/DetailedExperienceView';
import DetailedActivitiesView from './components/DetailedActivitiesView';
import { skills, experiences, projects } from './data';
import './styles/tailwind.css';

function App() {
	const [showDetailedProjects, setShowDetailedProjects] = useState(false);
	const [showDetailedExperience, setShowDetailedExperience] = useState(false);
	const [showDetailedActivities, setShowDetailedActivities] = useState(false);
	return (
		<div className="bg-white text-gray-900">
			{/* Hero Section */}
			<section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-3xl mx-auto space-y-8">
					{/* Name as main heading */}
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
						Felix Lau Pangestu
					</h1>
					
					{/* Main tagline */}
					<h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-700 leading-relaxed">
						Engineering insight from code to community.
					</h2>
					
					{/* Current position */}
					<p className="text-lg sm:text-xl text-gray-600">
						Final-year student at{' '}
						<a href="https://www.hkbu.edu.hk/" className="text-gray-900 hover:underline">Hong Kong Baptist University</a>{' '}
						in Hong Kong.
					</p>
					
					{/* Previous experience */}
					<p className="text-lg sm:text-xl text-gray-600">
						Previously at{' '}
						<a href="https://www.ntu.edu.sg/" className="text-gray-900 hover:underline">Nanyang Technological University</a>{' '}
						 for exchange in Singapore.
					</p>
					
					{/* Navigation links */}
					<div className="pt-8">
						<div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider">
							<a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">What I Work With</a>
							<a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Where I've Worked</a>
							<a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Things I've Built</a>
							<a href="#activities" className="text-gray-600 hover:text-gray-900 transition-colors">Other Stuff I Do</a>
							<a href="https://github.com/cdfelixj" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
						</div>
					</div>
				</div>
				
				{/* Scroll indicator - text hint */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
					<p className="text-gray-400 text-sm uppercase tracking-widest animate-pulse">Scroll</p>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-16">
						What I work with
					</h2>
					
					<div className="space-y-12">
						{Object.entries(skills).map(([category, items], index) => (
							<div key={category} className="space-y-4">
								<h3 className="text-xl sm:text-2xl font-normal text-gray-700">{category}</h3>
								<div className="flex flex-wrap justify-center gap-3">
									{items.map((skill, skillIndex) => (
										<span
											key={skill}
											className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors cursor-default px-3 py-1 border border-gray-200 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id="experience" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-16">
						Where I've worked
					</h2>
					
					<div className="space-y-16">
						{experiences.map((exp, index) => (
							<div key={index} className="space-y-6 max-w-2xl mx-auto">
								<div>
									<a 
										href={exp.website}
										target="_blank"
										rel="noopener noreferrer"
										className="text-2xl sm:text-3xl font-normal text-gray-900 hover:underline"
									>
										{exp.company}
									</a>
								</div>
								
								<div className="space-y-2">
									<h4 className="text-lg sm:text-xl font-normal text-gray-700">{exp.role}</h4>
									<p className="text-base sm:text-lg text-gray-600">{exp.period}</p>
								</div>
								
								<p className="text-base sm:text-lg leading-relaxed text-gray-700">{exp.description}</p>
								
								<div className="flex flex-wrap justify-center gap-2">
									{exp.technologies.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="text-sm text-gray-600 px-2 py-1 border border-gray-200 rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
					
					{/* View Detailed Experience Button */}
					<div className="mt-16">
						<button
							onClick={() => setShowDetailedExperience(true)}
							className="text-gray-600 hover:text-gray-900 hover:underline transition-colors text-sm uppercase tracking-wider"
						>
							View detailed experience →
						</button>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-16">
						Things I've built
					</h2>
					
					<div className="space-y-16">
						{projects.slice(0, 3).map((project, index) => (
							<div key={index} className="space-y-6 max-w-2xl mx-auto">
								<h3 className="text-2xl sm:text-3xl font-normal text-gray-900">{project.title}</h3>
								
								{project.impact && (
									<p className="text-lg sm:text-xl font-normal text-gray-700">{project.impact}</p>
								)}
								
								<p className="text-base sm:text-lg leading-relaxed text-gray-700">{project.description}</p>
								
								{project.technical && (
									<p className="text-base sm:text-lg leading-relaxed text-gray-700">{project.technical}</p>
								)}
								
								{project.funding && (
									<p className="text-base sm:text-lg leading-relaxed font-normal text-gray-900">{project.funding}</p>
								)}
								
								<div className="flex flex-wrap justify-center gap-4">
									{project.links.map((link, linkIndex) => (
										<a
											key={linkIndex}
											href="#"
											className="text-gray-600 hover:text-gray-900 hover:underline transition-colors text-sm uppercase tracking-wider"
										>
											{link}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
					
					{/* View Detailed Projects Button */}
					<div className="mt-16">
						<button
							onClick={() => setShowDetailedProjects(true)}
							className="text-gray-600 hover:text-gray-900 hover:underline transition-colors text-sm uppercase tracking-wider"
						>
							View all projects →
						</button>
					</div>
				</div>
			</section>

			{/* Activities Section */}
			<section id="activities" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-16">
						Other stuff I do
					</h2>
					
					<div className="space-y-16">
						{/* Hackathons */}
						<div className="space-y-6 max-w-2xl mx-auto">
							<h3 className="text-2xl sm:text-3xl font-normal text-gray-900">International Hackathons</h3>
							<p className="text-lg sm:text-xl font-normal text-gray-700">2022 - Present | Around the World</p>
							<p className="text-base sm:text-lg leading-relaxed text-gray-700">
								I've become a bit of a hackathon addict - there's something addictive about building something from nothing in 24-48 hours. 
								Started locally in Hong Kong and somehow ended up flying to different countries for these events.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
								<div className="text-left p-4 border border-gray-200 rounded-lg">
									<h4 className="font-medium text-gray-900">EasyA Consensus 2024</h4>
									<p className="text-sm text-gray-600">Hong Kong • Blockchain/Web3</p>
								</div>
								<div className="text-left p-4 border border-gray-200 rounded-lg">
									<h4 className="font-medium text-gray-900">DeveloperWeek AI/ML 2025</h4>
									<p className="text-sm text-gray-600">San Francisco, USA • AI/ML</p>
								</div>
								<div className="text-left p-4 border border-gray-200 rounded-lg">
									<h4 className="font-medium text-gray-900">YouthxHack 2024</h4>
									<p className="text-sm text-gray-600">Singapore • Youth Technology</p>
								</div>
								<div className="text-left p-4 border border-gray-200 rounded-lg">
									<h4 className="font-medium text-gray-900">HackTheNorth 2025</h4>
									<p className="text-sm text-gray-600">Waterloo, Canada • General Technology</p>
								</div>
							</div>
						</div>

						{/* AWS Ambassador */}
						<div className="space-y-6 max-w-2xl mx-auto">
							<h3 className="text-2xl sm:text-3xl font-normal text-gray-900">AWS Student Ambassador</h3>
							<p className="text-lg sm:text-xl font-normal text-gray-700">Jan 2025 - Present | Amazon Web Services</p>
							<p className="text-base sm:text-lg leading-relaxed text-gray-700">
								Got selected to represent AWS at my university, which still feels surreal. I help organize events and 
								try to get more students interested in cloud tech. Also got to help out at AWS Summit 2025.
							</p>
						</div>

						{/* HK Techathon */}
						<div className="space-y-6 max-w-2xl mx-auto">
							<h3 className="text-2xl sm:text-3xl font-normal text-gray-900">HK Techathon+ 2025</h3>
							<p className="text-lg sm:text-xl font-normal text-gray-700">2025 | 3rd Runner-up & Merit Award</p>
							<p className="text-base sm:text-lg leading-relaxed text-gray-700">
								Managed to snag 3rd Runner-up and a Merit Award in one of Hong Kong's biggest tech competitions. 
								The competition was intense - lots of really talented teams.
							</p>
						</div>
					</div>
					
					{/* View Detailed Activities Button */}
					<div className="mt-16">
						<button
							onClick={() => setShowDetailedActivities(true)}
							className="text-gray-600 hover:text-gray-900 hover:underline transition-colors text-sm uppercase tracking-wider"
						>
							View all activities & achievements →
						</button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-3xl mx-auto text-center space-y-8">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900">
						Let's connect
					</h2>
					
					<div className="space-y-6 text-lg leading-relaxed text-gray-700">
						<p>
							Always interested in discussing cool projects, tech ideas, or potential collaborations.
						</p>
						
						<p>
							Reach me at{' '}
							<a href="mailto:cd.felixj@gmail.com" className="text-gray-900 hover:underline">cd.felixj@gmail.com</a>
						</p>
					</div>
					
					<div className="pt-8">
						<div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider">
							<a href="https://github.com/cdfelixj" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
						</div>
					</div>
				</div>
			</section>

			{/* Minimal footer */}
			<div className="fixed bottom-4 left-4 text-sm text-gray-500">
				© 2025
			</div>
			
			{/* Detailed Views */}
			<DetailedProjectsView 
				open={showDetailedProjects} 
				onClose={() => setShowDetailedProjects(false)} 
			/>
			<DetailedExperienceView 
				open={showDetailedExperience} 
				onClose={() => setShowDetailedExperience(false)} 
			/>
			<DetailedActivitiesView 
				open={showDetailedActivities} 
				onClose={() => setShowDetailedActivities(false)} 
			/>
		</div>
	);
}

export default App;