export interface projectSchema {
    title: string,
    shortDescription: string,
    overview: string,
    problem: string,
    solution: string,
    keyFeatures: string[],
    techStack: string[],
    codeLink: string,
    liveLink: string,
    thumbnail: string,
}
export const projectsData: projectSchema[] = [
    {
        title: "SynthMarket-AI 📈",
        shortDescription:
            "An AI-powered synthetic market simulation platform featuring adversarial multi-agent roleplay, persistent state management, and real-time boardroom debate.",

        overview:
            "SynthMarket-AI is a high-performance simulation platform designed to stress-test product profiles and business models through adversarial, multi-agent boardroom negotiations. Built on a stateful, persistent LangGraph architecture, the system autonomously generates adversarial buyer personas that cross-examine product viability, financial ROI, and security constraints in real-time, providing deep analytical insights grounded in vector-based documentation.",

        problem:
            "Traditional market research relies on static surveys and predictable algorithms that fail to capture the dynamic friction of real-world corporate decision-making. Developers and product managers often lack a high-fidelity environment to stress-test their ideas against adversarial critique before deployment.",

        solution:
            "SynthMarket-AI introduces a stateful, cyclic agent ecosystem that acts as a synthetic focus group. It combines dynamic persona generation, Astra DB-backed RAG, SQL-based graph persistence, and Human-in-the-Loop (HITL) interrupts to create a unique, interactive simulation environment that provides rigorous, role-specific feedback.",

        keyFeatures: [
            "Dynamic Adversarial Persona Generation",
            "Stateful LangGraph Orchestration",
            "SQL-based Persistent Graph Checkpointing",
            "Human-in-the-Loop (HITL) Simulation Pivoting",
            "Real-time Server-Sent Events (SSE) Streaming",
            "Astra DB Vector-Grounded Contextual Retrieval",
            "Round-Robin Multi-Agent Debate Logic",
            "Groq Reasoning Engine Integration",
            "MongoDB-backed Workspace Persistence",
            "Seamless Streamlit Interactive Dashboard"
        ],

        techStack: [
            "FastAPI",
            "Python 3.11",
            "LangGraph",
            "LangChain",
            "Astra DB (Vector Store)",
            "MongoDB (PyMongo)",
            "Groq API",
            "Google Gemini API",
            "Streamlit",
            "SQL Checkpointer"
        ],

        codeLink: "https://github.com/AkshayKapoor024/SynthMarket-AI",

        liveLink: "https://synthmarket-ai-frontend.vercel.app",

        thumbnail: "/SynthmarketAI.png"
    },
    
    {
        title: "Vantaguard 🛡️",

        shortDescription:
            "An AI-powered, multi-agent security platform featuring dynamic sandbox verification and contextual conversational auditing.",

        overview:
            "Vantaguard is an advanced security auditing platform designed to autonomously analyze, verify, and report software vulnerabilities. Built on a stateful LangGraph architecture, it utilizes isolated Docker sandboxes to bridge the gap between static analysis and dynamic execution. The system features intelligent routing and persistent memory, providing developers with continuous, context-aware security insights.",

        problem:
            "Traditional Static Application Security Testing (SAST) tools often generate high volumes of false positives. Developers waste significant time triaging theoretical vulnerabilities without an immediate, safe environment to verify actual exploitability.",

        solution:
            "Vantaguard introduces a multi-agent workflow that actively verifies threats. It clones repositories, formulates exploits, and dynamically installs dependencies inside secure, non-root Docker sandboxes to execute proof-of-concept scripts, significantly reducing false positives.",

        keyFeatures: [
            "Multi-Agent Orchestration Workflow",
            "Dynamic Sandbox Exploit Verification",
            "Contextual Conversational Memory",
            "Automated Dependency Resolution",
            "Intelligent Fail-Safe Routing",
            "Ephemeral Container Execution",
            "Automated Resource Cleanup",
            "Human-Readable Audit Reports",
            "OS-Agnostic Compatibility",
            "Secure Session Authentication"
        ],

        techStack: [
            "FastAPI",
            "Python 3.11",
            "LangGraph",
            "LangChain",
            "Docker",
            "MongoDB",
            "Groq API",
            "Google Gemini API",
            "Streamlit"
        ],

        codeLink:
            "https://github.com/AkshayKapoor024/Multi-Agent-Security-Auditor",

        liveLink:
            "http://35.154.61.226:8501/", // Update with your actual deployment link

        thumbnail:
            "/Vantaguard.png" // Point this to the image we generated
    },
    {
        title: "CodeArena",
        shortDescription:
            "A real-time 1v1 competitive coding platform with matchmaking, live code evaluation, and AI-powered complexity analysis.",

        overview:
            "CodeArena is a high-performance real-time competitive programming platform designed to transform traditional coding practice into an intense head-to-head experience. Built on a MERN architecture with WebSocket-driven matchmaking, it enables developers to compete in live algorithmic duels with synchronized progress tracking, instant test-case validation, and dynamic rating updates. The system integrates AI-powered search and complexity analysis, providing users with intelligent feedback on their solutions while maintaining secure authentication and scalable match lifecycle management.",

        problem:
            "Most competitive coding platforms are static and asynchronous, lacking real-time head-to-head environments. Developers often struggle to receive immediate feedback on performance, efficiency, and time complexity while competing in a live setting.",

        solution:
            "CodeArena introduces a WebSocket-powered duel ecosystem with instant matchmaking, synchronized live editors, real-time validation, Elo-based ranking updates, and AI-driven algorithm analysis. It creates a fast, competitive environment that emphasizes both correctness and Big-O efficiency.",

        keyFeatures: [
            "Real-time WebSocket Matchmaking",
            "Head-to-Head Duel Rooms",
            "Live Progress Tracking",
            "Monaco Code Editor Integration",
            "Multi-Language Support (C++, Java, Python)",
            "Hidden Test Case Validation",
            "Dynamic Elo Rating System",
            "AI-Powered Problem Search",
            "Big-O Complexity Analysis",
            "Secure Auth (Local + Google OAuth)"
        ],

        techStack: [
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Node.js",
            "Express.js",
            "Socket.io",
            "MongoDB Atlas",
            "Passport.js",
            "Google Gemini API",
            "Cloudinary",
            "Render & Vercel"
        ],

        codeLink:
            "https://github.com/AkshayKapoor024/featured-projects/tree/main/CodeArena",

        liveLink:
            "https://codearena-murex.vercel.app",
        thumbnail: "/CodeArena.png"
    },

    {
        title: "Schedulo",
        shortDescription:
            "A full-stack intelligent event management platform with AI search, QR-based ticketing, RSVP tracking, and calendar integration.",

        overview:
            "Schedulo is a comprehensive MERN-based event scheduling and RSVP platform designed to streamline event creation, participation tracking, and attendee management. It combines a modern, responsive interface with AI-powered discovery, QR-based ticket generation, automated email notifications, and Google Calendar integration. The system supports secure authentication, real-time RSVP updates, organizer dashboards, and post-event feedback mechanisms—delivering a production-grade event management ecosystem.",

        problem:
            "Modern event management requires centralized scheduling, attendee tracking, smart discovery, and secure participation systems. Existing solutions often lack integrated AI-based filtering, seamless RSVP workflows, and automated ticket validation within a single platform.",

        solution:
            "Schedulo delivers an end-to-end event lifecycle system: event creation, RSVP management, AI-powered search, QR-based ticket generation, Google Calendar synchronization, and automated email reminders. It integrates secure authentication, cloud storage, and session persistence to ensure scalability and reliability.",

        keyFeatures: [
            "Event Creation & Management",
            "Authentication-Based RSVP System",
            "Organizer Dashboard & Attendee Stats",
            "AI-Powered Natural Language Search",
            "Google Calendar Integration",
            "QR Code Ticket Generation",
            "Automated Email Notifications",
            "Feedback & Rating System",
            "Cloud Media Storage",
            "Session Persistence with Mongo Store"
        ],


        techStack: [
            "React.js",
            "Tailwind CSS",
            "DaisyUI",
            "Node.js",
            "Express.js",
            "MongoDB Atlas",
            "Passport.js",
            "Google OAuth 2.0",
            "Google Gemini API",
            "Cloudinary",
            "Nodemailer",
            "Agenda",
            "QRCode",
            "Render"
        ],

        codeLink:
            "https://github.com/AkshayKapoor024/featured-projects/tree/main/Schedulo",

        liveLink:
            "https://go-schedulo.vercel.app",

        thumbnail: "/Schedulo.png"

    },

    // {
    //     title: "Voyagr",
    //     shortDescription:
    //         "A full-stack travel and booking platform, featuring listings, reviews, cloud image handling, and secure authentication.",

    //     overview:
    //         "Voyagr is a full-stack travel listing and booking platform inspired by Airbnb and Trivago. It enables users to create and manage property listings, upload images to the cloud, submit reviews, and securely authenticate through a robust session-based architecture. Built using an MVC structure, the application emphasizes backend stability, schema validation, middleware chaining, and cloud integrations, demonstrating production-grade full-stack development practices.",

    //     problem:
    //         "Travel listing platforms require structured backend architecture, secure authentication, reliable image handling, and strong validation mechanisms to ensure scalable and maintainable operations.",

    //     solution:
    //         "Voyagr implements a structured MVC architecture with robust validation, cloud-based image storage, secure authentication using Passport.js, session persistence via MongoDB store, and role-based authorization to ensure safe listing and review management.",

    //     keyFeatures: [
    //         "Listings & Reviews CRUD",
    //         "Secure Authentication (Passport.js)",
    //         "Role-Based Authorization",
    //         "Cloudinary Image Uploads",
    //         "Mapbox Location Integration",
    //         "Server-Side Validation (Joi)",
    //         "Session-Based Authentication",
    //         "Custom Error Handling",
    //         "Responsive Bootstrap UI",
    //         "MVC Architecture Structure"
    //     ],


    //     techStack: [
    //         "HTML",
    //         "CSS",
    //         "JavaScript",
    //         "Bootstrap",
    //         "Node.js",
    //         "Express.js",
    //         "MongoDB Atlas",
    //         "Mongoose",
    //         "Passport.js",
    //         "Cloudinary",
    //         "Multer",
    //         "Mapbox",
    //         "EJS & EJS-Mate"
    //     ],

    //     codeLink:
    //         "https://github.com/AkshayKapoor024/featured-projects/tree/main/Voyagr",

    //     liveLink:
    //         "https://voyagr-gd5b.onrender.com",
    //     thumbnail: "/Voyagr.png"
    // }

];
