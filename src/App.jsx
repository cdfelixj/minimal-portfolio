import React, { useState } from 'react';
import DetailedProjectsView from './components/DetailedProjectsView';
import DetailedExperienceView from './components/DetailedExperienceView';
import DetailedActivitiesView from './components/DetailedActivitiesView';
import FloatingNav from './components/FloatingNav';
import { experiences, projects, skills } from './data';
import './styles/tailwind.css';

function App() {
	const [expandedExperience, setExpandedExperience] = useState(null);
	const [showDetailedProjects, setShowDetailedProjects] = useState(false);
	const [showDetailedExperience, setShowDetailedExperience] = useState(false);
	const [showDetailedActivities, setShowDetailedActivities] = useState(false);

	return (
		<div className="bg-white text-gray-800 min-h-screen">
			{/* Single Continuous Content Flow */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
				
				{/* Hero/About Section */}
				<div id="hero" className="mb-32">
					<div>
						<div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16">
							<div className="flex-1 text-center lg:text-left">
								<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 mb-4 leading-tight">
									Felix Lau Pangestu
								</h1>
								
								<div className="text-xl sm:text-2xl text-gray-600 mb-2">
									Software Engineer
								</div>
								
								<div className="text-base sm:text-lg text-blue-900 mb-8">
									Taikoo, Hong Kong • +852 94381766
								</div>
							</div>
							
							<div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-lg overflow-hidden border-4 border-blue-900 flex-shrink-0">
								<img 
									src="/assets/cardPhotos/fish.jpg" 
									alt="Felix Lau Pangestu"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						<div className="space-y-4 sm:space-y-6 text-base sm:text-lg leading-relaxed">
						<p>
							Hi, I’m Felix — a final-year Business Computing & Data Analytics student at Hong Kong Baptist University. Alongside my studies, I’ve enjoyed being involved
							as a Student Ambassador, Peer Mentor, and Computer Science Tutor, where I get to both represent my university
							and support fellow students.
						</p>

						<p>
							I’m Chinese-Indonesian and currently based in Hong Kong. Last year, I spent a semester abroad at
							Nanyang Technological University in Singapore on the Fung Scholarship — an experience that really broadened
							my perspective. My Cantonese is still a work in progress, but I’m a native English speaker and love being
							part of an international community here in Hong Kong.
						</p>

						<p>
							I’m particularly passionate about how emerging technologies can be applied to meaningful, real-world problems.
							Right now, I’m building <span className="font-medium">Read the Vision</span>,
							a computer vision project designed to support communication within deaf and mute communities.
							I’ve also had the chance to work on projects ranging from optimizing APIs to experimenting with
							large language models — experiences that deepened my interest in combining research with practical,
							user-focused solutions. Outside of class and work, I play Rugby, Powerlift, and play tons of Poker!
						</p>

						<p>
							If you’d like to connect, you can find me on{' '}
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-blue-900 hover:underline font-medium">LinkedIn</a>,
							check out my projects on{' '}
							<a href="https://github.com/cdfelixj" className="text-blue-900 hover:underline font-medium">GitHub</a>,
							explore my{' '}
							<a href="https://cdfelixj.netlify.app" className="text-blue-900 hover:underline font-medium">portfolio</a>,
							or just drop me a message at{' '}
							<a href="mailto:cd.felixj@gmail.com" className="text-blue-900 hover:underline font-medium">cd.felixj@gmail.com</a>.
						</p>
						</div>

						<div className="mt-8 sm:mt-12 text-center">
							<button 
								onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
								className="text-blue-900 hover:text-blue-700 font-medium text-base sm:text-lg transition-colors duration-300"
							>
								Explore My Technical Skills ↓
							</button>
						</div>
					</div>
				</div>

				{/* Technical Skills Section */}
				<div id="skills" className="mb-24 sm:mb-32">
					<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">What I Work With</h2>
					<p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">The tools and technologies I use to build stuff</p>
					
					<div className="space-y-6 sm:space-y-8">
						{Object.entries(skills).map(([category, items], index) => (
							<div key={category}>
								<h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">{category}:</h3>
								<div className="flex flex-wrap gap-1 sm:gap-2">
									{items.map((skill, skillIndex) => (
										<span
											key={skill}
											className="text-sm sm:text-base text-gray-700 hover:text-blue-900 hover:font-medium transition-all duration-300 cursor-default"
										>
											{skill}{skillIndex < items.length - 1 ? ' • ' : ''}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Professional Experience Section */}
				<div id="experience" className="mb-24 sm:mb-32">
					<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Where I've Worked</h2>
					<p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">The places that taught me things and put up with my questions</p>
					
					<div className="relative">
						<div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-blue-900"></div>
						
						<div className="space-y-8 sm:space-y-12">
							{experiences.map((exp, index) => (
								<div
									key={index}
									className="relative pl-8 sm:pl-12"
								>
									<div className="absolute left-0 sm:left-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-900 rounded-full flex items-center justify-center">
										<div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
									</div>
									
									<div className="space-y-3 sm:space-y-4">
										<div>
											<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
												<a 
													href={exp.website}
													target="_blank"
													rel="noopener noreferrer"
													className="text-xl sm:text-2xl font-bold text-blue-900 hover:underline"
												>
													{exp.company}
												</a>
											</div>
											<h4 className="text-lg sm:text-xl font-semibold text-gray-800">{exp.role}</h4>
											<p className="text-sm sm:text-base text-gray-600">{exp.period}</p>
										</div>
										
										<p className="text-base sm:text-lg leading-relaxed">{exp.description}</p>
										
										<button
											onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
											className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300 text-sm sm:text-base"
										>
											{expandedExperience === index ? 'Show less ↑' : 'View details ↓'}
										</button>
										
										{expandedExperience === index && (
											<div className="space-y-3 sm:space-y-4">
												<ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-2">
													{exp.details.map((detail, detailIndex) => (
														<li key={detailIndex}>{detail}</li>
													))}
												</ul>
												<div className="flex flex-wrap gap-1 sm:gap-2">
													{exp.technologies.map((tech, techIndex) => (
														<span
															key={techIndex}
															className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-900 rounded-full text-xs sm:text-sm font-medium"
														>
															{tech}
														</span>
													))}
												</div>
											</div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					
					{/* View All Experience Button */}
					<div className="text-center mt-12">
						<button
							onClick={() => setShowDetailedExperience(true)}
							className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
						>
							View the Full & Detailed Journey
						</button>
					</div>
				</div>

				{/* Featured Projects Section */}
				<div id="projects" className="mb-24 sm:mb-32">
					<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Things I've Built</h2>
					<p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">Projects I'm actually proud of (and some that taught me valuable lessons)</p>
					
					<div className="space-y-12 sm:space-y-20">
						{projects.map((project, index) => (
							<div
								key={index}
								className="space-y-4 sm:space-y-6"
							>
								<h3 className="text-2xl sm:text-3xl font-bold text-blue-900">{project.title}</h3>
								
								{project.impact && (
									<p className="text-lg sm:text-xl font-medium text-gray-800">{project.impact}</p>
								)}
								
								<p className="text-base sm:text-lg leading-relaxed">{project.description}</p>
								
								{project.technical && (
									<p className="text-base sm:text-lg leading-relaxed">{project.technical}</p>
								)}
								
								{project.funding && (
									<p className="text-base sm:text-lg leading-relaxed font-medium text-blue-900">{project.funding}</p>
								)}
								
								<div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
									{project.links.map((link, linkIndex) => (
										<a
											key={linkIndex}
											href="#"
											className="text-blue-900 hover:text-blue-700 font-medium hover:underline transition-colors duration-300 text-sm sm:text-base"
										>
											{link}
										</a>
									))}
								</div>
							</div>
						))}
					</div>
					
					{/* View All Projects Button */}
					<div className="text-center mt-8 sm:mt-12">
						<button
							onClick={() => setShowDetailedProjects(true)}
							className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-900 text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-blue-800 transition-colors duration-300"
						>
							View All Projects
						</button>
					</div>
				</div>

				{/* Activities & Achievements Section */}
				<div id="activities" className="mb-24 sm:mb-32">
					<h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Other Stuff I Do</h2>
					<p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">Competitions, roles, and random achievements that somehow ended up on my resume</p>
					
					<div className="space-y-12 sm:space-y-16">
						<div className="space-y-4 sm:space-y-6">
							<h3 className="text-2xl sm:text-3xl font-bold text-blue-900">Hackathon Adventures</h3>
							<p className="text-lg sm:text-xl font-medium text-gray-800">2022 - Present | Around the World</p>
							<p className="text-base sm:text-lg leading-relaxed">
								I've become a bit of a hackathon addict - there's something addictive about building something from nothing in 24-48 hours. Started locally in Hong Kong and somehow ended up flying to different countries for these events. Made some great friends and learned that energy drinks really do have limits.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
								<div className="bg-blue-50 p-4 rounded-lg">
									<h4 className="font-semibold text-blue-900">EasyA Consensus Hackathon 2024</h4>
									<p className="text-sm text-gray-600">Hong Kong • Blockchain/Web3</p>
								</div>
								<div className="bg-blue-50 p-4 rounded-lg">
									<h4 className="font-semibold text-blue-900">DeveloperWeek AI/ML 2025</h4>
									<p className="text-sm text-gray-600">San Francisco, USA • AI/ML</p>
								</div>
								<div className="bg-blue-50 p-4 rounded-lg">
									<h4 className="font-semibold text-blue-900">YouthxHack 2024</h4>
									<p className="text-sm text-gray-600">Singapore • Youth Technology</p>
								</div>
								<div className="bg-blue-50 p-4 rounded-lg">
									<h4 className="font-semibold text-blue-900">HackTheNorth 2025</h4>
									<p className="text-sm text-gray-600">Waterloo, Canada • General Technology</p>
								</div>
							</div>
						</div>

						<div className="space-y-6">
							<h3 className="text-3xl font-bold text-blue-900">AWS Student Ambassador</h3>
							<p className="text-xl font-medium text-gray-800">Jan 2025 - Present | Amazon Web Services</p>
							<p className="text-lg leading-relaxed">
								Got selected to represent AWS at my university, which still feels surreal. I help organize events and try to get more students interested in cloud tech. Also got to help out at AWS Summit 2025, which was both overwhelming and amazing - so many smart people in one place!
							</p>
						</div>

						<div className="space-y-6">
							<h3 className="text-3xl font-bold text-blue-900">HK Techathon+ 2025</h3>
							<p className="text-xl font-medium text-gray-800">2025 | Hong Kong's Big Tech Competition</p>
							<p className="text-lg leading-relaxed">
								Managed to snag 3rd Runner-up and a Merit Award in one of Hong Kong's biggest tech competitions. The competition was intense - lots of really talented teams. Our solution was pretty solid, though I definitely learned that pitching is just as important as the tech itself.
							</p>
						</div>
					</div>

					<div className="text-center mt-12">
						<button
							onClick={() => setShowDetailedActivities(true)}
							className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
							</svg>
							View All Activities & Achievements
						</button>
					</div>
				</div>

				{/* Contact Section */}
				<div id="contact">
					<h2 className="text-4xl font-bold text-blue-900 mb-8">Let's Chat!</h2>
					
					<div className="space-y-6 text-lg leading-relaxed">
						<p>
							I'm always down to chat about cool projects, weird tech ideas, or just generally nerding out about code. Whether you want to discuss a potential collaboration, need help with something, or just want to argue about which programming language is superior, hit me up!
						</p>
						
						<p>
							Easiest way to reach me is at{' '}
							<a href="mailto:cd.felixj@gmail.com" className="text-blue-900 hover:underline font-medium">cd.felixj@gmail.com</a>{' '}
							or if it's urgent, call me at{' '}
							<a href="tel:+85294381766" className="text-blue-900 hover:underline font-medium">+852 94381766</a>.
							I'm based in Taikoo, Hong Kong and usually respond pretty quickly (unless I'm in the gym or lost in code). You can also stalk my projects on{' '}
							<a href="https://github.com/cdfelixj" className="text-blue-900 hover:underline font-medium">GitHub</a>,{' '}
							connect on{' '}
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-blue-900 hover:underline font-medium">LinkedIn</a>, or browse more of my work on my{' '}
							<a href="#" className="text-blue-900 hover:underline font-medium">full portfolio</a>.
						</p>
					</div>
					
					<div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-600">
						<p>© 2025 Felix Lau Pangestu. Built with React and Tailwind CSS.</p>
						<button 
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className="mt-4 text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
						>
							Back to top ↑
						</button>
					</div>
				</div>
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
			
			{/* Floating Navigation */}
			<FloatingNav />
		</div>
	);
}

export default App;