export interface Head {
    title: string,
    colorCode: string,
    iconLink: string
}
export interface ContentInfo {
    title: string,
    description: string,
    proficiency: string,
    category: string,
    color: string,
}
export interface Content {
    language: ContentInfo[],
    frontend: ContentInfo[],
    backend: ContentInfo[],
    database: ContentInfo[],
    concepts: ContentInfo[],
    tools: ContentInfo[],
}
export const skillsList: Head[] = [
    {
        title: "Frontend",
        colorCode: "#F45A33",
        iconLink: "https://img.icons8.com/wired/64/16161C/paint-palette.png"
    },
    {
        title: "Backend",
        colorCode: "#22C3AD",
        iconLink: "https://img.icons8.com/ios/50/16161C/server.png"
    },
    {
        title: "Database",
        colorCode: "#F97A1F",
        iconLink: "https://img.icons8.com/external-prettycons-lineal-prettycons/49/16161C/external-databases-web-seo-prettycons-lineal-prettycons.png"
    },
    {
        title: "Language",
        colorCode: "#ED5EA5",
        iconLink: "https://img.icons8.com/ios/50/16161C/java-coffee-cup-logo--v1.png"
    },
    {
        title: "Tools",
        colorCode: "#8347EA",
        iconLink: "https://img.icons8.com/ios/50/16161C/maintenance--v1.png"
    },
    {
        title: "Concepts",
        colorCode: "#248CF3",
        iconLink: "https://img.icons8.com/ios/50/16161C/google-code.png"
    },
]

export const contentList: Content = {
    language: [{
        title: "C",
        description: "Efficient low‑level systems programming power",
        proficiency: "Proficient",
        category: "language",
        color: 'bg-[#ED5EA5]'
    },
    {
        title: "C++",
        description: "High‑performance coding with OOP strength",
        proficiency: "Proficient",
        category: "language",
        color: 'bg-[#ED5EA5]'
    },
    {
        title: "Java",
        description: "Enterprise solutions & cross‑platform reliability",
        proficiency: "Expert",
        category: "language",
        color: 'bg-[#ED5EA5]'
    },
    {
        title: "Javascript",
        description: "Dynamic web interactions made seamless",
        proficiency: "Expert",
        category: "language",
        color: 'bg-[#ED5EA5]'
    },
    {
        title: "Python",
        description: "Versatile scripting for AI and automation",
        proficiency: "Advanced",
        category: "language",
        color: 'bg-[#ED5EA5]'
    }],
    frontend: [{
        title: "React.js",
        description: "Interactive UIs with component reusability",
        proficiency: "Expert",
        category: "frontend",
        color: 'bg-[#F45A33]'
    },
    {
        title: "Next.js",
        description: "SSR and routing for modern apps",
        proficiency: "Learning",
        category: "frontend",
        color: 'bg-[#F45A33]'
    },
    {
        title: "HTML5",
        description: "Structured content for every webpage",
        proficiency: "Expert",
        category: "frontend",
        color: 'bg-[#F45A33]'
    },
    {
        title: "CSS3",
        description: "Beautiful styling with responsive layouts",
        proficiency: "Expert",
        category: "frontend",
        color: 'bg-[#F45A33]'
    },
    {
        title: "Tailwind CSS",
        description: "Utility‑first styling with rapid prototyping",
        proficiency: "Expert",
        category: "frontend",
        color: 'bg-[#F45A33]'
    },
    {
        title: "Bootstrap",
        description: "Quick responsive design with ready components",
        proficiency: "Expert",
        category: "frontend",
        color: 'bg-[#F45A33]'
    },
    {
        title: "EJS",
        description: "Dynamic templating for server‑rendered views",
        proficiency: "Expert",
        category: "frontend",
        color: 'bg-[#F45A33]'
    }],
    backend: [{
        title: "Node.js",
        description: "Fast, event‑driven server runtime",
        proficiency: "Expert",
        category: "backend",
        color: 'bg-[#22C3AD]'
    },
    {
        title: "Express.js",
        description: "Minimalist framework for REST APIs",
        proficiency: "Expert",
        category: "backend",
        color: 'bg-[#22C3AD]'
    },
    {
        title: "Npm",
        description: "Package management for JavaScript ecosystem",
        proficiency: "Expert",
        category: "backend",
        color: 'bg-[#22C3AD]'
    },
    {
        title: "RESTful API's",
        description: "- Standardized communication between services",
        proficiency: "Advanced",
        category: "backend",
        color: 'bg-[#22C3AD]'
    },
    {
        title: "Web Sockets",
        description: "For Real-Time Communication in apps",
        proficiency: "Advanced",
        category: "backend",
        color: 'bg-[#22C3AD]'
    }],
    database: [{
        title: "MongoDB",
        description: "Flexible NoSQL storage for modern apps",
        proficiency: "Expert",
        category: "database",
        color: 'bg-[#F97A1F]'
    },
    {
        title: "SQL",
        description: "- Structured queries for relational databases",
        proficiency: "Expert",
        category: "database",
        color: 'bg-[#F97A1F]'
    },
    {
        title: "Firebase",
        description: "Realtime database and auth made easy",
        proficiency: "Proficient",
        category: "database",
        color: 'bg-[#F97A1F]'
    }],
    concepts: [{
        title: "OOPs",
        description: "Fast, event‑driven server runtime",
        proficiency: "Expert",
        category: "concepts",
        color: 'bg-[#248CF3]'
    },
    {
        title: "DSA",
        description: "Minimalist framework for REST APIs",
        proficiency: "Advanced",
        category: "concepts",
        color: 'bg-[#248CF3]'
    },
    {
        title: "API Design",
        description: "RESTful principles, Versioning, Documentation",
        proficiency: "Expert",
        category: "concepts",
        color: 'bg-[#248CF3]'
    },
    {
        title: "Clean Architecture",
        description: "SOLID, Design patterns, DRY",
        proficiency: "Proficient",
        category: "concepts",
        color: 'bg-[#248CF3]'
    }],
    tools: [{
        title: "Postman",
        description: "API testing simplified with powerful tools",
        proficiency: "Expert",
        category: "tools",
        color: 'bg-[#8347EA]'
    },
    {
        title: "HoppScotch",
        description: "Lightweight API client for quick checks",
        proficiency: "Advanced",
        category: "tools",
        color: 'bg-[#8347EA]'
    },
    {
        title: "Figma",
        description: "Collaborative design for modern interfaces",
        proficiency: "Advanced",
        category: "tools",
        color: 'bg-[#8347EA]'
    },
    {
        title: "Git",
        description: "Version control for collaborative coding",
        proficiency: "Advanced",
        category: "tools",
        color: 'bg-[#8347EA]'
    },
    {
        title: "Github",
        description: "Cloud hosting for projects and teams",
        proficiency: "Expert",
        category: "tools",
        color: 'bg-[#8347EA]'
    }]
}