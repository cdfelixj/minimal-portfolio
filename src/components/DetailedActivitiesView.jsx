import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DetailedActivitiesView = React.memo(({ open, onClose }) => {
	const [expandedActivity, setExpandedActivity] = useState(null);
	const scrollContainerRef = useRef(null);

	const activities = [
		{
			title: "INTERNATIONAL HACKATHON PARTICIPATION",
			period: "2024 - 2025",
			organization: "Various International Hackathons",
			description: "Active participant in prestigious international hackathons, developing innovative solutions across blockchain, AI/ML, FinTech, and social impact domains.",
			details: [
				"EasyA Consensus Hong Kong 2024 - Developed blockchain and DeFi solutions, focusing on decentralized finance protocols and smart contract development",
				"DeveloperWeek AI/ML San Francisco 2025 - Built AI/ML applications and SaaS solutions, implementing machine learning models for real-world problems",
				"YouthxHack Singapore 2024 - Created FinTech and social impact projects, addressing financial inclusion and accessibility challenges",
				"HackTheNorth Canada 2025 - Developed full-stack applications with AI integration, showcasing end-to-end development capabilities",
				"Gained international exposure to diverse tech communities through rapid prototyping and cross-cultural collaboration"
			],
			technologies: ["Blockchain", "Smart Contracts", "AI/ML", "React", "Node.js", "Python", "TensorFlow"]
		},
		{
			title: "AWS STUDENT AMBASSADOR",
			period: "Jan 2025 - Present",
			organization: "Amazon Web Services",
			description: "Liaison between AWS and the student community, organizing events and promoting AWS resources to increase engagement.",
			details: [
				"Supported successful execution of AWS Summit 2025 by coordinating logistics and managing technical workshops for 1000+ attendees",
				"Assisted with event logistics and partner coordination, ensuring smooth operations and stakeholder satisfaction",
				"Promoted AWS resources and services to student community through workshops, seminars, and technical demonstrations",
				"Organized technical workshops on cloud computing, serverless architecture, and AWS services adoption",
				"Built relationships with student developers and facilitated AWS certification study groups"
			],
			technologies: ["AWS Services", "Cloud Computing", "Serverless", "Lambda", "S3", "RDS"]
		},
		{
			title: "HK TECHATHON+ 2025",
			period: "2025",
			organization: "Hong Kong Technology Competition",
			description: "Achieved 3rd Runner-up and Merit Award in Hong Kong's premier technology competition among hundreds of participants.",
			details: [
				"Achieved 3rd Runner-up position in highly competitive field of 200+ teams from across Hong Kong and Asia",
				"Received Merit Awardee recognition for technical excellence and innovative problem-solving approach",
				"Developed comprehensive technology solution addressing real-world urban challenges using IoT and data analytics",
				"Collaborated with cross-functional team under pressure, demonstrating leadership and technical skills",
				"Presented solution to panel of industry judges including senior executives from major tech companies"
			],
			technologies: ["IoT", "Data Analytics", "React", "Python", "Machine Learning", "APIs"]
		},
		{
			title: "READ THE VISION - FOUNDER",
			period: "Nov 2024 - Present",
			organization: "Computer Vision Startup",
			description: "Building a computer vision solution to transcribe hand signals and improve communication between deaf/mute communities and the public.",
			details: [
				"Admitted to HKSTP Ideation Programme with up to HKD 100,000 funding potential, demonstrating viable business model and technical feasibility",
				"Secured initial HKD 10,000 funding to develop MVP and conduct market validation research",
				"Developed computer vision algorithms for real-time sign language recognition with 85%+ accuracy rate",
				"Built social impact solution addressing accessibility challenges for deaf and mute communities",
				"Conducted user research and interviews with 50+ members of deaf community to validate product-market fit"
			],
			technologies: ["Computer Vision", "Machine Learning", "Python", "OpenCV", "TensorFlow", "React Native"]
		},
		{
			title: "CODE TO GIVE - MORGAN STANLEY",
			period: "2024",
			organization: "Morgan Stanley Singapore",
			description: "Reached Top 8 in Morgan Stanley's prestigious international coding competition focused on social impact solutions.",
			details: [
				"Achieved Top 8 finalist position out of 500+ international participants from leading universities",
				"Developed innovative solutions for social good and community impact, focusing on financial literacy education",
				"Collaborated directly with Morgan Stanley engineers and senior developers as mentors throughout the competition",
				"Presented comprehensive technical solution to panel of industry judges and Morgan Stanley executives",
				"Built full-stack application addressing financial accessibility for underserved communities"
			],
			technologies: ["React", "Node.js", "MongoDB", "Express", "Financial APIs", "Data Visualization"]
		},
		{
			title: "USFHK RUGBY COMPETITION",
			period: "2024",
			organization: "Hong Kong Rugby Union",
			description: "Achieved 2nd Runner-up position representing Hong Kong Baptist University in competitive university rugby tournament.",
			details: [
				"Secured 2nd Runner-up position in competitive university rugby league with 12 participating teams",
				"Served as team captain and key player, leading strategic gameplay and team coordination",
				"Demonstrated exceptional leadership and sportsmanship throughout the tournament series",
				"Balanced intensive training schedule with academic commitments, maintaining First Class Honors",
				"Represented university at inter-collegiate level, enhancing school reputation in competitive sports"
			],
			technologies: ["Leadership", "Team Coordination", "Strategic Planning", "Physical Fitness"]
		},
		{
			title: "ACADEMIC EXCELLENCE & LEADERSHIP",
			period: "2022 - Present",
			organization: "Hong Kong Baptist University",
			description: "Maintaining 3.6/4.0 GPA with First Class Honors while serving in multiple leadership roles within the university community.",
			details: [
				"Maintained 3.6/4.0 GPA with consistent First Class Honors across all semesters in Business Computing & Data Analytics",
				"Received First-Gen University Student Scholarship for academic excellence and financial need demonstration",
				"Awarded Outstanding Student Scholarship for academic achievement and community contribution",
				"Selected for HKROA scholarship based on academic merit and leadership potential",
				"Served as Student Ambassador, representing university at official events and prospective student sessions",
				"Worked as Peer Mentor, guiding 20+ incoming students through academic and social transition",
				"Provided Computer Science tutoring, helping students achieve average 15% grade improvement"
			],
			technologies: ["Python", "Java", "Data Analytics", "Machine Learning", "Statistics", "R", "SQL"]
		},
		{
			title: "COMPETITIVE GAMING ACHIEVEMENT",
			period: "2024",
			organization: "Counter-Strike: Global Offensive",
			description: "Achieved Legendary Eagle Master rank, demonstrating strategic thinking, team coordination, and competitive excellence.",
			details: [
				"Attained Legendary Eagle Master rank, placing in top 4% of global player base",
				"Demonstrated advanced strategic gameplay and tactical decision-making under pressure",
				"Led team coordination and communication in competitive matches with consistent performance",
				"Maintained high-level competitive gaming while balancing full academic course load",
				"Developed strategic thinking and quick decision-making skills applicable to problem-solving in technology"
			],
			technologies: ["Strategic Thinking", "Team Coordination", "Performance Analysis", "Competitive Excellence"]
		}
	];

	if (!open) return null;

	const handleActivityClick = (index) => {
		setExpandedActivity(expandedActivity === index ? null : index);
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto"
				ref={scrollContainerRef}
			>
				<div className="min-h-screen py-12 px-4">
					<div className="max-w-6xl mx-auto">
						{/* Header */}
						<div className="flex justify-between items-center mb-12">
							<div>
								<h1 className="text-5xl font-bold text-blue-900 mb-4">
									Activities & Achievements
								</h1>
								<p className="text-xl text-gray-600">
									Leadership roles, awards, hackathons, and community contributions that shaped my journey
								</p>
							</div>
							<motion.button
								onClick={onClose}
								className="text-blue-900 hover:text-blue-700 transition-colors duration-300 text-2xl font-bold p-2"
								whileHover={{ 
									scale: 1.1,
									transition: { duration: 0.2, ease: "easeOut" }
								}}
								whileTap={{ scale: 0.9 }}
							>
								✕
							</motion.button>
						</div>

						{/* Activities List */}
						<div className="space-y-6">
							{activities.map((activity, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
								>
									<div
										className="p-8 cursor-pointer"
										onClick={() => handleActivityClick(index)}
									>
										<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
											<div className="flex-1">
												<div className="flex items-center gap-4 mb-4">
													<h3 className="text-2xl font-bold text-blue-900">
														{activity.title}
													</h3>
													<span className="text-lg font-semibold text-blue-600">
														{activity.period}
													</span>
												</div>
												<p className="text-lg font-medium text-gray-700 mb-3">
													{activity.organization}
												</p>
												<p className="text-gray-600 leading-relaxed">
													{activity.description}
												</p>
											</div>
											<div className="flex-shrink-0 mt-4 lg:mt-0 lg:ml-8">
												<button className="bg-blue-100 text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors">
													{expandedActivity === index ? 'Show Less' : 'Show More'}
												</button>
											</div>
										</div>
									</div>

									<AnimatePresence>
										{expandedActivity === index && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: 'auto' }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.3 }}
												className="bg-gray-50 px-8 pb-8"
											>
												<div className="pt-6 border-t border-gray-200">
													<h4 className="text-lg font-semibold text-gray-800 mb-4">
														Detailed Highlights:
													</h4>
													<ul className="space-y-3 mb-6">
														{activity.details.map((detail, detailIndex) => (
															<li key={detailIndex} className="flex items-start">
																<span className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-2 flex-shrink-0"></span>
																<span className="text-gray-700 leading-relaxed">
																	{detail}
																</span>
															</li>
														))}
													</ul>
													<div className="flex flex-wrap gap-2">
														{activity.technologies.map((tech, techIndex) => (
															<span
																key={techIndex}
																className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
															>
																{tech}
															</span>
														))}
													</div>
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							))}
						</div>

						{/* Footer */}
						<div className="mt-16 pt-8 border-t border-gray-200 text-center">
							<motion.button
								onClick={() => scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
								className="text-blue-900 hover:text-blue-700 font-medium transition-colors duration-300"
								whileHover={{ 
									y: -2,
									transition: { duration: 0.2, ease: "easeOut" }
								}}
								whileTap={{ y: 0 }}
							>
								Back to top ↑
							</motion.button>
						</div>
					</div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
});

export default DetailedActivitiesView;
