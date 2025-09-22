import React from 'react';
import { skills, experiences, projects } from './data';
import './styles/tailwind.css';

function App() {
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
						in Singapore.
					</p>
					
					{/* Navigation links */}
					<div className="pt-8">
						<div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-wider">
							<a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">What I Work With</a>
							<a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Where I've Worked</a>
							<a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Things I've Built</a>
							<a href="https://github.com/cdfelixj" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
						</div>
					</div>
				</div>
				
				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
					<div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
					</div>
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
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 snap-start">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-16">
						Things I've built
					</h2>
					
					<div className="space-y-16">
						{projects.map((project, index) => (
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
		</div>
	);
}

export default App;