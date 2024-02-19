import React, { useEffect, useState, useRef } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import PreLoader from './components/PreLoader';
import RevealOnScroll from './components/RevealOnScroll';
import AboutMe from './components/AboutMe';
import CV from "/public/assets/Juan-Felix-Pangestu_CV.pdf"




function App() {
	
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="#d97706"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="#0284c7"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);
		
  return (
	<>
	<PreLoader/>
	<div className="flex fixed p-2 z-10 right-20 top-4 gap-10 items-center">

		<div className="rounded-md p-1">
			<a href={CV} without rel="noopener noreferrer" target="_blank" className='group text-sky-600 dark:text-amber-600 transition duration-300'> CV
			<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600 dark:bg-amber-600"></span>
			</a>
		</div>

		<div className="">
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="text-lg p-1"
			>
				{theme === 'dark' ? sun : moon}
			</button>
		</div>

		
	</div>
	
	
	
	<div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
		<div className="max-w-5xl w-11/12 mx-auto">
		
			<Intro />
			<RevealOnScroll>
				<Timeline />
			</RevealOnScroll>
			
			<RevealOnScroll>
			<Portfolio />
			</RevealOnScroll>
			
			<RevealOnScroll>
				<AboutMe />
			</RevealOnScroll>
			
			<RevealOnScroll>
				<Contact />
			</RevealOnScroll>
			<Footer />
		</div>
	</div>
	 </>
  )
}

export default App