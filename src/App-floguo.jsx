import React from 'react';
import './styles/tailwind.css';

function App() {
	return (
		<div className="bg-white text-gray-900 min-h-screen">
			{/* Floguo-style minimal layout */}
			<div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
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
							<a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
							<a href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
							<a href="https://github.com/cdfelixj" className="text-gray-600 hover:text-gray-900 transition-colors">GitHub</a>
							<a href="https://linkedin.com/in/jfelixpangestu/" className="text-gray-600 hover:text-gray-900 transition-colors">LinkedIn</a>
						</div>
					</div>
				</div>
			</div>

			{/* Minimal footer */}
			<div className="fixed bottom-4 left-4 text-sm text-gray-500">
				© 2025
			</div>
		</div>
	);
}

export default App;