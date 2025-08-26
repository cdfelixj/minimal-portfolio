import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import FloatingNav from './components/FloatingNav';
import './styles/tailwind.css';

function App() {
	const [expandedExperience, setExpandedExperience] = useState(null);
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
			description: "Enhanced digital transformation initiatives across multiple departments.",
			details: [
				"Developed automated reporting dashboards using Power BI and Python",
				"Collaborated with cross-functional teams to optimize IT infrastructure",
				"Implemented data migration scripts for legacy system modernization",
				"Contributed to mobile app feature development and testing"
			],
			technologies: ["Python", "Power BI", "SQL Server", "React Native", "Azure"]
		},
		{
			company: "WIZPRESSO",
			role: "Software Engineer Intern",
			period: "Jun 2024 - Aug 2024",
			description: "Built full-stack solutions for e-commerce platform optimization.",
			details: [
				"Developed responsive web applications using React and Node.js",
				"Integrated payment systems with Stripe and PayPal APIs",
				"Optimized database queries reducing load times by 40%",
				"Implemented automated testing suites with Jest and Cypress"
			],
			technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe API", "Jest"]
		},
		{
			company: "HKBU",
			role: "Research Assistant",
			period: "Jan 2024 – Aug 2024",
			description: "Advanced AI research in financial statement analysis and machine learning applications.",
			details: [
				"Developed ML models for financial document classification using NLP",
				"Processed large datasets with 95% accuracy in financial ratio extraction",
				"Published findings in peer-reviewed conference proceedings",
				"Collaborated with faculty on grant proposal development"
			],
			technologies: ["Python", "TensorFlow", "Pandas", "NLTK", "PyTorch", "BigQuery"]
		}
	];

	const projects = [
		{
			title: "READ THE VISION",
			impact: "Building computer vision solutions for social impact through accessibility technology",
			description: "Developing an AI-powered mobile application that helps visually impaired individuals navigate and understand their environment through real-time object detection and audio feedback.",
			technical: "Implemented using TensorFlow Lite for on-device inference, React Native for cross-platform development, and Google Cloud Vision API for enhanced accuracy. The app processes camera feeds in real-time with <200ms latency.",
			funding: "Secured $10,000 in seed funding from HKBU Innovation Challenge and selected for Google for Startups accelerator program.",
			links: ["GitHub", "Live Demo", "Pitch Deck"]
		},
		{
			title: "POWERLIFT E-COMMERCE",
			description: "Full-stack e-commerce platform specializing in fitness equipment with advanced inventory management and customer analytics.",
			technical: "Built with MERN stack architecture, featuring React frontend with Redux state management, Express.js RESTful API, MongoDB with Mongoose ODM, and Node.js backend. Integrated Stripe payment processing with webhook handling for secure transactions.",
			features: "Real-time inventory tracking, personalized product recommendations using collaborative filtering, automated email marketing campaigns, and comprehensive admin dashboard with sales analytics.",
			links: ["GitHub", "Live Site"]
		},
		{
			title: "MEALMATCH",
			description: "Social impact platform connecting food donors with local charities to reduce food waste and address hunger in Hong Kong communities.",
			technical: "Leveraged Hungarian Algorithm for optimal donor-charity matching based on location, food type, and capacity constraints. Built with React frontend, Firebase Realtime Database for instant updates, and Google Maps API for location services.",
			impact: "Facilitated over 500 successful food donations, preventing 2,000+ meals from going to waste while serving 15+ local charities across Hong Kong.",
			links: ["GitHub", "Case Study"]
		}
	];

	const skills = {
		"Programming Languages": ["Java", "Python", "C#", "JavaScript", "TypeScript", "SQL"],
		"Frameworks & Libraries": ["React", "Next.js", "ASP.NET Core", "Spring Boot", "Express.js", "Flask", "Material UI", "Tailwind CSS"],
		"Data & Analytics": ["MySQL", "MongoDB", "BigQuery", "Firebase", "AWS RDS", "Pandas", "LangChain", "Power BI"],
		"Cloud & Development": ["AWS (RDS, DMS, S3)", "GCP", "Git", "GitHub", "VS Code", "Postman"]
	};

	return (
		<div className="bg-white text-gray-800 min-h-screen relative overflow-hidden">
			{/* Subtle background elements */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-20 right-10 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
				<div className="absolute top-40 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
				<div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style={{animationDelay: '4s'}}></div>
			</div>

			{/* Progress Bar */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-blue-900 z-50 origin-left"
				style={{ scaleX }}
			/>

			{/* Floating Navigation */}
			<FloatingNav />

			{/* Single Continuous Content Flow */}
			<div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
				
				{/* Hero/About Integrated Section */}
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
									Aspiring Software Engineer & ML Enthusiast
								</motion.div>
								
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.5 }}
									className="text-lg text-blue-900 mb-8"
								>
									Hong Kong
								</motion.div>
							</div>
							
							<motion.div
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.8, delay: 0.6 }}
								className="w-64 h-64 rounded-lg overflow-hidden border-4 border-blue-900 flex-shrink-0"
							>
								<img 
									src="/assets/cardPhotos/grad.jpg" 
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
								Final year student at Hong Kong Baptist University studying Business Computing & Data Analytics with a 3.6 GPA and First Class Honors. 
							</p>
							
							<p>
								Of Chinese-Indonesian background, currently based in Hong Kong with international experience from my exchange semester at Nanyang Technological University in Singapore.
							</p>
							
							<p>
								Passionate about full-stack development and machine learning, I'm currently building computer vision solutions for social impact through my startup Read the Vision. You can connect with me on{' '}
								<a href="https://linkedin.com/in/felixlp" className="text-blue-900 hover:underline font-medium">LinkedIn</a>, explore my work on{' '}
								<a href="https://github.com/cdfelixj" className="text-blue-900 hover:underline font-medium">GitHub</a>, and reach out at{' '}
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
				<div id="skills" className="scroll-animate mb-32">
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
				<div id="experience" className="scroll-animate mb-32">
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
												exit={{ opacity: 0, height: 0 }}
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
				</div>

				{/* Featured Projects Section */}
				<div id="projects" className="scroll-animate mb-32">
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
								
								<p className="text-lg leading-relaxed">{project.technical}</p>
								
								{project.features && (
									<p className="text-lg leading-relaxed">{project.features}</p>
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
				</div>

				{/* Contact & Closing Section */}
				<div id="contact" className="scroll-animate">
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
							<a href="https://linkedin.com/in/felixlp" className="text-blue-900 hover:underline font-medium">LinkedIn</a>, and explore more of my work in my{' '}
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
		</div>
	);
}

export default App;
