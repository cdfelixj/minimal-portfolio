import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import DetailedProjectsView from './components/DetailedProjectsView';
import DetailedExperienceView from './components/DetailedExperienceView';
import DetailedActivitiesView from './components/DetailedActivitiesView';
import FloatingNav from './components/FloatingNav';
import './styles/tailwind.css';

function App() {
	const [expandedExperience, setExpandedExperience] = useState(null);
	const [showDetailedProjects, setShowDetailedProjects] = useState(false);
	const [showDetailedExperience, setShowDetailedExperience] = useState(false);
	const [showDetailedActivities, setShowDetailedActivities] = useState(false);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	});

	// Intersection Observer for scroll animations
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-fadeInUp');
					}
				});
			},
			{ threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
		);

		const elements = document.querySelectorAll('.scroll-animate');
		elements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	const experiences = [
		{
			company: "CATHAY PACIFIC",
			role: "Digital & IT Intern", 
			period: "Jul 2025 – Aug 2025",
			description: "Delivered full-stack MVP with automated reconciliation and coordinated hackathon for 600+ participants.",
			details: [
				"Delivered a full-stack MVP (React/TypeScript, Python Flask) with automated reconciliation and validation",
				"Coordinated hackathon masterclasses for 600+ participants, managing logistics and technical workshops",
				"Supported integrations with top-tier U.S. bank and global technology partner"
			],
			technologies: ["React", "TypeScript", "Python", "Flask"]
		},
		{
			company: "WIZPRESSO",
			role: "Software Engineer Intern",
			period: "Jun 2024 - Aug 2024", 
			description: "Refactored core services reducing API latency by 22% and implemented OAuth 2.0/OIDC for 15k+ users.",
			details: [
				"Refactored core services from SvelteKit/Prisma to ASP.NET Core Web API, reducing API latency by 22%",
				"Implemented OAuth 2.0/OIDC with JWT SSO for 15k+ users",
				"Led zero-downtime migration from SQL Server to Amazon RDS"
			],
			technologies: ["ASP.NET Core", "OAuth 2.0", "Amazon RDS", "SvelteKit"]
		},
		{
			company: "HKBU",
			role: "Research Assistant",
			period: "Jan 2024 – Aug 2024",
			description: "Adapted 7B LLM for financial sentiment analysis using PEFT-LoRA with >95% fewer parameters.",
			details: [
				"Adapted a 7B LLM for financial sentiment analysis using PEFT–LoRA technique",
				"Achieved higher F1 scores than BERT with >95% fewer trainable parameters",
				"Integrated optimized model into LangChain pipeline for large-scale inference"
			],
			technologies: ["Python", "PEFT-LoRA", "LangChain", "PyTorch"]
		}
	];

	const projects = [
		{
			title: "READ THE VISION",
			impact: "Building computer vision solution to transcribe hand signals and improve communication between deaf/mute communities and the public",
			description: "Admitted to the HKSTP Ideation Programme with up to HKD 100,000 funding potential. Initial HKD 10,000 secured.",
			funding: "Secured HKD 10,000 initial funding with potential for up to HKD 100,000 from HKSTP Ideation Programme.",
			links: ["GitHub", "Programme Details"]
		},
		{
			title: "POWERLIFT E-COMMERCE", 
			description: "Full-stack E-Commerce platform for powerlifting equipment using the MERN stack with integrated Stripe payment processing.",
			technical: "Features admin dashboard with product management capabilities and secure payment processing.",
			links: ["GitHub", "Live Site", "Admin Dashboard"]
		},
		{
			title: "MEALMATCH",
			description: "Web platform designed to connect food bank donors with beneficiaries in need, utilizing the Hungarian Algorithm for efficient matching.",
			impact: "Real-time dashboard for monitoring food donations and distributions using Firestore.",
			links: ["GitHub", "Case Study"]
		},
		{
			title: "MOVIE SENTIMENT ANALYSIS",
			description: "Deep Learning NLP project benchmarking RNN, LSTM, GRU, CNN, and attention-based models for sentiment classification.",
			technical: "Achieved up to 81% test accuracy with Word2Vec embeddings for enhanced word representation.",
			links: ["GitHub", "Results"]
		}
	];

	const skills = {
		"Programming Languages": ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
		"Frameworks & Libraries": ["React", "Svelte", "Next.js", "ASP.NET Core", "Spring Boot", "Express.js", "Flask", "Material UI", "Tailwind CSS", "Streamlit"],
		"Databases & Cloud": ["MySQL", "MongoDB", "BigQuery", "Firebase", "AWS RDS", "AWS S3", "AWS DMS"],
		"AI & Machine Learning": ["Pandas", "Matplotlib", "Seaborn", "LangChain", "LoRA", "PEFT", "PyTorch", "NLTK", "Gensim", "HuggingFace"],
		"Tools & Platforms": ["AWS", "GCP", "Git", "GitHub", "Postman", "VS Code", "OAuth 2.0", "OIDC", "JWT", "REST APIs", "Stripe API"]
	};

	return (
		<div className="bg-white text-gray-800 min-h-screen relative overflow-hidden">
			{/* Subtle background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
				<div className="absolute top-40 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
			</div>

			{/* Progress Bar */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-blue-900 z-50 origin-left"
				style={{ scaleX }}
			/>

			{/* Single Continuous Content Flow */}
			<div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
				
				{/* Hero/About Section */}
				<div id="hero" className="mb-32">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
							<div className="flex-1">
								<motion.h1 
									className="text-6xl lg:text-7xl font-bold text-blue-900 mb-4 leading-tight"
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									Felix Lau Pangestu
								</motion.h1>
								
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
									className="text-2xl text-gray-600 mb-2"
								>
									Software Engineer
								</motion.div>
								
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="text-lg text-blue-900 mb-8"
								>
									Taikoo, Hong Kong • +852 94381766
								</motion.div>
							</div>
							
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								className="w-64 h-64 rounded-lg overflow-hidden border-4 border-blue-900 flex-shrink-0"
							>
								<img 
									src="/assets/cardPhotos/fish.jpg" 
									alt="Felix Lau Pangestu"
									className="w-full h-full object-cover"
								/>
							</motion.div>
						</div>

						<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="space-y-6 text-lg leading-relaxed"
						>
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
						</motion.div>


						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 1.0 }}
							className="mt-12 text-center"
						>
							<button 
								onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
								className="text-blue-900 hover:text-blue-700 font-medium text-lg transition-colors duration-300"
							>
								Explore My Technical Skills ↓
							</button>
						</motion.div>
					</motion.div>
				</div>

				{/* Technical Skills Section */}
				<div id="skills" className="mb-32">
					<h2 className="text-4xl font-bold text-blue-900 mb-4">Technical Expertise</h2>
					<p className="text-xl text-gray-600 mb-12">Technologies I work with to bring ideas to life</p>
					
					<div className="space-y-8">
						{Object.entries(skills).map(([category, items], index) => (
							<motion.div
								key={category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-semibold text-gray-800 mb-4">{category}:</h3>
								<div className="flex flex-wrap gap-2">
									{items.map((skill, skillIndex) => (
										<motion.span
											key={skill}
											className="text-gray-700 hover:text-blue-900 hover:font-medium transition-all duration-300 cursor-default"
											whileHover={{ scale: 1.05 }}
										>
											{skill}{skillIndex < items.length - 1 ? ' • ' : ''}
										</motion.span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Professional Experience Section */}
				<div id="experience" className="mb-32">
					<h2 className="text-4xl font-bold text-blue-900 mb-4">Professional Journey</h2>
					<p className="text-xl text-gray-600 mb-12">My career progression in technology and innovation</p>
					
					<div className="relative">
						<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-900"></div>
						
						<div className="space-y-12">
							{experiences.map((exp, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="relative pl-12"
								>
									<div className="absolute left-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
										<div className="w-3 h-3 bg-white rounded-full"></div>
									</div>
									
									<div className="space-y-4">
										<div>
											<h3 className="text-2xl font-bold text-blue-900">{exp.company}</h3>
											<h4 className="text-xl font-semibold text-gray-800">{exp.role}</h4>
											<p className="text-gray-600">{exp.period}</p>
										</div>
										
										<p className="text-lg">{exp.description}</p>
										
										<motion.button
											onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
											className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
											whileHover={{ scale: 1.02 }}
										>
											{expandedExperience === index ? 'Show less ↑' : 'View details ↓'}
										</motion.button>
										
										{expandedExperience === index && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												transition={{ duration: 0.3 }}
												className="space-y-4"
											>
												<ul className="list-disc list-inside space-y-2 text-gray-700">
													{exp.details.map((detail, detailIndex) => (
														<li key={detailIndex}>{detail}</li>
													))}
												</ul>
												<div className="flex flex-wrap gap-2">
													{exp.technologies.map((tech, techIndex) => (
														<span
															key={techIndex}
															className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-medium"
														>
															{tech}
														</span>
													))}
												</div>
											</motion.div>
										)}
									</div>
								</motion.div>
							))}
						</div>
					</div>
					
					{/* View All Experience Button */}
					<div className="text-center mt-12">
						<motion.button
							onClick={() => setShowDetailedExperience(true)}
							className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
							</svg>
							View Full Professional Journey
						</motion.button>
					</div>
				</div>

				{/* Featured Projects Section */}
				<div id="projects" className="mb-32">
					<h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
					<p className="text-xl text-gray-600 mb-12">Innovative solutions that make a meaningful impact</p>
					
					<div className="space-y-20">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="space-y-6"
							>
								<h3 className="text-3xl font-bold text-blue-900">{project.title}</h3>
								
								{project.impact && (
									<p className="text-xl font-medium text-gray-800">{project.impact}</p>
								)}
								
								<p className="text-lg leading-relaxed">{project.description}</p>
								
								{project.technical && (
									<p className="text-lg leading-relaxed">{project.technical}</p>
								)}
								
								{project.funding && (
									<p className="text-lg leading-relaxed font-medium text-blue-900">{project.funding}</p>
								)}
								
								<div className="flex gap-4">
									{project.links.map((link, linkIndex) => (
										<a
											key={linkIndex}
											href="#"
											className="text-blue-900 hover:text-blue-700 font-medium hover:underline transition-colors duration-300"
										>
											{link}
										</a>
									))}
								</div>
							</motion.div>
						))}
					</div>
					
					{/* View All Projects Button */}
					<div className="text-center mt-12">
						<motion.button
							onClick={() => setShowDetailedProjects(true)}
							className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
							View All Projects
						</motion.button>
					</div>
				</div>

				{/* Activities & Achievements Section */}
				<div id="activities" className="mb-32">
					<h2 className="text-4xl font-bold text-blue-900 mb-4">Activities & Achievements</h2>
					<p className="text-xl text-gray-600 mb-12">Leadership roles, awards, hackathons, and community contributions that shaped my journey</p>
					
					<div className="space-y-16">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<h3 className="text-3xl font-bold text-blue-900">International Hackathon Participation</h3>
							<p className="text-xl font-medium text-gray-800">2022 - Present | Global Tech Communities</p>
							<p className="text-lg leading-relaxed">
								Active participant in international hackathons across multiple countries, focusing on blockchain, AI/ML, and innovative technology solutions. Gained international exposure to diverse tech communities through rapid prototyping and cross-cultural collaboration.
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
									<p className="text-sm text-gray-600">Canada • General Technology</p>
								</div>
							</div>
							<div className="flex flex-wrap gap-3">
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">International Exposure</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Blockchain/Web3</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI/ML</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Cross-cultural Collaboration</span>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<h3 className="text-3xl font-bold text-blue-900">AWS Student Ambassador</h3>
							<p className="text-xl font-medium text-gray-800">Jan 2025 - Present | Amazon Web Services</p>
							<p className="text-lg leading-relaxed">
								Liaison between AWS and the student community, organizing events and promoting AWS resources to increase engagement. Supported the successful execution of AWS Summit 2025 by assisting with event logistics and partner coordination.
							</p>
							<div className="flex flex-wrap gap-3">
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Leadership</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Cloud Technology</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Event Management</span>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<h3 className="text-3xl font-bold text-blue-900">HK Techathon+ 2025</h3>
							<p className="text-xl font-medium text-gray-800">2025 | Hong Kong Technology Competition</p>
							<p className="text-lg leading-relaxed">
								Achieved 3rd Runner-up and Merit Award in Hong Kong's premier technology competition, developing innovative solutions alongside talented teams from across the region.
							</p>
							<div className="flex flex-wrap gap-3">
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">3rd Runner-up</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Merit Award</span>
								<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Innovation</span>
							</div>
						</motion.div>
					</div>

					<div className="text-center mt-12">
						<motion.button
							onClick={() => setShowDetailedActivities(true)}
							className="inline-flex items-center px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-300"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
							</svg>
							View All Activities & Achievements
						</motion.button>
					</div>
				</div>

				{/* Contact Section */}
				<div id="contact">
					<h2 className="text-4xl font-bold text-blue-900 mb-8">Let's Connect</h2>
					
					<div className="space-y-6 text-lg leading-relaxed">
						<p>
							I'm always excited to collaborate on innovative projects and explore new opportunities in technology and social impact. Whether you're interested in discussing full-stack development, machine learning applications, or startup ventures, I'd love to hear from you.
						</p>
						
						<p>
							Feel free to reach out at{' '}
							<a href="mailto:cd.felixj@gmail.com" className="text-blue-900 hover:underline font-medium">cd.felixj@gmail.com</a>{' '}
							or call me at{' '}
							<a href="tel:+85294381766" className="text-blue-900 hover:underline font-medium">+852 94381766</a>.
							I'm based in Taikoo, Hong Kong and always open to discussing new opportunities. You can also find me on{' '}
							<a href="https://github.com/cdfelixj" className="text-blue-900 hover:underline font-medium">GitHub</a>,{' '}
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-blue-900 hover:underline font-medium">LinkedIn</a>, and explore more of my work in my{' '}
							<a href="#" className="text-blue-900 hover:underline font-medium">complete portfolio</a>.
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