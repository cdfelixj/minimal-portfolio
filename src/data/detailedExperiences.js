export const detailedExperiences = [
	{
		company: "CATHAY PACIFIC",
		website: "https://www.cathaypacific.com/",
		role: "Digital & IT Intern", 
		period: "Jul 2025 – Aug 2025",
		description: "Worked with Loyalty Solutions, Cargo Digital, and Hackathon Partnership teams on full-stack development, automation, and large-scale event coordination.",
		details: [
			"Delivered an 8‑week full‑stack MVP (React/TypeScript + Python Flask) grounded in clear UML workflows/data models; integrated validation, rate versioning, and a jurisdictional rule engine to ensure accurate, scalable cross‑border calculations and reduce miscalculation risk",
			"Automated reconciliation and monthly reporting for ~40K shipment packets, covering ~HKD 10M in tariffs; reduced manual effort by hours and improved auditability with clear lineage from source data through computed tariffs and adjustments",
			"Assisted API standardization across teams and external partners: helped run design discussions, captured decisions in sequence/flow diagrams, and clarified endpoints, payloads, and error responses adopted by several services",
			"Coordinated technical hackathon masterclasses for 600+ participants by managing cross-functional relationships between internal business units and external partners, overseeing logistics coordination and maintaining comprehensive project documentation",
			"Built automated scheduling system reducing manual effort by creating VBA-powered rostering algorithm, optimizing multi-team on-call assignments and reducing scheduling conflicts",
			"Developed enterprise CLM documentation suite achieving faster user onboarding by creating structured guides, process workflows, and delegation frameworks, enabling efficient system adoption for 50+ cross-functional users"
		],
		technologies: ["React", "TypeScript", "Python", "Flask", "UML", "VBA"]
	},
	{
		company: "OXBRIDGE ECONOMICS",
		website: "https://www.oxbridge-econ.com/",
		role: "Software Engineer Intern",
		period: "Feb 2025 – May 2025",
		description: "Worked on a new MVP application applying news sentiment analysis to predict stocks and built core product features for fintech clients.",
		details: [
			"Created MVP full-stack application (React, Flask, Python) to visualize and analyze news sentiment for stock prediction",
			"Integrated Stripe payment system for seamless transactions",
			"Collaborated with research team to tune sentiment analysis pipeline and present results to stakeholders"
		],
		technologies: ["React", "Python", "Flask", "Stripe"]
	},
	{
		company: "WIZPRESSO",
		website: "https://wizpresso.com/",
		role: "Software Engineer Intern",
		period: "Jun 2024 - Aug 2024", 
		description: "Worked on refactoring core services, implementing authentication systems, and leading production database migration efforts.",
		details: [
			"Replatformed key services from SvelteKit + Prisma to ASP.NET Core Web API, cutting median API latency ~22% (1.6s to 1.24s) by optimizing async I/O, tuning DbContext usage/connection settings, and adding in-memory caching for hot read endpoints; serving 1,500+ DAUs",
			"Implemented OAuth 2.0/OIDC with JWT (RS256), enabling SSO for 15k+ accounts; enforced PKCE for SPA/mobile clients, rotating keys via JWKS. Passed external pen test and SOC 2 controls review with no high/critical findings",
			"Led production migration from SQL Server to Amazon RDS using AWS DMS with CDC and parallel load; achieved zero-downtime cutover with <0.05% variance pre-cutover, verified via row-count and checksum reconciliation; discrepancies auto-remediated before final switch",
			"Developed 15 new features and optimized 10 existing ones using the Svelte framework. Improving portal speed by 20%, leading to an increase in user engagement and a 20% reduction in load times",
			"Collaborated effectively with cross-functional teams utilizing agile methodologies and Jira to enhance project delivery and responsiveness to change"
		],
		technologies: ["SvelteKit", "Prisma", "ASP.NET Core", "OAuth 2.0", "OIDC", "JWT", "SQL Server", "Amazon RDS", "AWS DMS", "Jira"]
	},
	{
		company: "HONG KONG BAPTIST UNIVERSITY",
		website: "https://www.hkbu.edu.hk/",
		role: "Research Assistant",
		period: "Jan 2024 – Aug 2024",
		description: "Conducted research on financial sentiment analysis using Large Language Models with parameter-efficient finetuning.",
		details: [
			"Domain-adapted a 7B LLM for financial sentiment and NER using PEFT–LoRA in Transformers (4‑bit QLoRA), training on 20,000+ earnings-call transcripts; improved task F1 scores vs. BERT baselines while reducing trainable params by >95% and compute/memory by ~60–70% and integrated the model into a LangChain pipeline for large-scale inference",
			"Conducted research and finetuning of a Large Language Model through LangChain to analyze earnings 20,000 call transcripts and conferences, significantly enhancing its capabilities in classification and sentiment analysis",
			"Authored detailed documentation on research progress regarding the efficacy of using Large Language Models to process corporate financial statements"
		],
		technologies: ["LLM", "PEFT-LoRA", "QLoRA", "BERT", "LangChain", "Transformers", "Financial NLP"]
	},
	{
		company: "ADMAZES",
		website: "https://admazes.com/",
		role: "Software Engineer Intern",
		period: "Dec 2023 - Jan 2024",
		description: "Enhanced Local LLM with RAG pipeline improving QA accuracy by 25% and optimized BigQuery infrastructure for 30% better retrieval performance.",
		details: [
			"Enhanced a Local Large Language Model using LangChain, HuggingFace, and Streamlit, improving response accuracy by 25% through better semantic understanding and advanced search capabilities with the RAG approach",
			"Built a RAG pipeline for a local LLM using LangChain and HuggingFace embeddings; improved QA accuracy by 25% on an internal test set and reduced hallucinations by ~60% via better retrieval and citation checks",
			"Optimized BigQuery analytics infrastructure using advanced SQL techniques including partition pruning, query parallelization, and columnar scanning, executing 50+ complex queries with JOINs and window functions to achieve 30% retrieval performance improvement",
			"Analyzed datasets with Google BigQuery, optimizing data retrieval by 30% and generating insights with 100+ complex SQL queries, leading to a 20% boost in operational efficiency"
		],
		technologies: ["RAG", "LLM", "LangChain", "HuggingFace", "BigQuery", "SQL", "Streamlit"]
	},
	{
		company: "MARKWORTH",
		website: "https://www.linkedin.com/company/markworth-group?originalSubdomain=hk",
		role: "Product Management Intern",
		period: "May 2023 - Aug 2023",
		description: "Integrated websites with Odoo's backend ERP system and supported full product development lifecycle through market research and cross-functional collaboration.",
		details: [
			"Integrated and developed websites with Odoo's backend ERP system to pull product catalogs, service listings, project details and events dynamically",
			"Supported the full product development lifecycle by conducting market research, creating requirements docs, developing prototypes, tracking metrics, and working cross-functionally with multiple departments",
			"Part of the product team contributing to product design, implementation and discussions"
		],
		technologies: ["HTML", "CSS", "Javascript", "Odoo", "ERP Systems"]
	}
];