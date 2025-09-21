export const experiences = [
	{
		company: "CATHAY PACIFIC",
		website: "https://www.cathaypacific.com/",
		role: "Digital & IT Intern",
		period: "Jul 2025 – Aug 2025",
		description: "Built a cargo tracking system from scratch, helped run hackathon workshops, and created tools that actually made people's work easier.",
		details: [
			"Built a web app to track cargo shipments - started with messy spreadsheets and ended up with something that could handle 40,000+ packages",
			"Helped coordinate workshops for over 600 people during their internal hackathon (learned a lot about herding cats!)",
			"Created a scheduling tool in VBA that reduced conflicts in the on-call roster - not the sexiest tech, but it worked",
			"Got thrown into the deep end with enterprise systems and somehow managed to swim"
		],
		technologies: ["React", "TypeScript", "Python", "Flask", "VBA"]
	},
	{
		company: "WIZPRESSO",
		website: "https://wizpresso.com/",
		role: "Software Engineer Intern",
		period: "Jun 2024 – Aug 2024",
		description: "Helped migrate their main APIs to a faster tech stack, set up proper user authentication, and managed a database migration without breaking everything.",
		details: [
			"Rewrote some of their core APIs from SvelteKit to ASP.NET Core - made things about 22% faster for their daily users",
			"Set up OAuth and single sign-on for their 15,000+ users (spent way too much time reading authentication docs)",
			"Helped move their database from SQL Server to Amazon RDS without any downtime (surprisingly stressful!)"
		],
		technologies: ["ASP.NET Core", "OAuth 2.0", "OIDC", "Amazon RDS", "SvelteKit"]
	},
	{
		company: "HONG KONG BAPTIST UNIVERSITY",
		website: "https://www.hkbu.edu.hk/",
		role: "Research Assistant",
		period: "Jan 2024 – Aug 2024",
		description: "Worked on making large language models better at understanding financial news - turns out it's harder than it sounds, but pretty rewarding when it works.",
		details: [
			"Fine-tuned a 7 billion parameter language model to analyze financial sentiment using a technique called LoRA (fancy way to avoid retraining the entire thing)",
			"Trained it on 20,000+ financial transcripts - learned way more about earnings calls than I ever expected to",
			"Managed to get better results than BERT while using 95% fewer parameters (efficiency matters when you're not Google!)"
		],
		technologies: ["Python", "PEFT-LoRA", "QLoRA", "LangChain", "Transformers"]
	}
];