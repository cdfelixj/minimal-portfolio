import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { detailedActivities } from '../data';

const DetailedActivitiesView = React.memo(({ open, onClose }) => {
	const [expandedActivity, setExpandedActivity] = useState(null);
	const scrollContainerRef = useRef(null);

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
							{detailedActivities.map((activity, index) => (
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
