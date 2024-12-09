import { 
  DiGo, DiReact, DiNodejs, DiPython, DiJava,
  SiTypescript, SiDocker, SiGooglecloud,
  SiFlutter, SiMongodb, SiRedis, SiFirebase, SiGraphql,
  SiVuedotjs, SiAngular, SiSwift, SiKotlin, SiPostgresql,
  SiRust
} from '../assets/Icons';

import { CourseCategories } from '../types/course';

export const courses: CourseCategories = {
  General: [
    {
      name: "Backend Development",
      description: "Core concepts of backend development including APIs, servers, and scalability.",
      icon: DiNodejs,
      gradient: { from: "from-emerald-400", to: "to-cyan-500" }
    },
    {
      name: "Cloud Computing",
      description: "Modern cloud platforms, services and deployment strategies.",
      icon: SiGooglecloud,
      gradient: { from: "from-blue-400", to: "to-indigo-500" }
    },
    {
      name: "System Design",
      description: "Design scalable systems and microservices architecture.",
      icon: SiDocker,
      gradient: { from: "from-purple-400", to: "to-pink-500" }
    }
  ],
  Language: [
    {
      name: "Go",
      description: "Build efficient and scalable applications with Go.",
      icon: DiGo,
      gradient: { from: "from-cyan-500", to: "to-blue-600" }
    },
    {
      name: "Rust",
      description: "Systems programming with memory safety guarantees.",
      icon: SiRust,
      gradient: { from: "from-orange-500", to: "to-red-600" }
    },
    {
      name: "TypeScript",
      description: "Develop type-safe JavaScript applications.",
      icon: SiTypescript,
      gradient: { from: "from-blue-500", to: "to-blue-700" }
    },
    {
      name: "Python",
      description: "Build versatile applications and automate tasks.",
      icon: DiPython,
      gradient: { from: "from-yellow-500", to: "to-blue-500" }
    },
    {
      name: "Java",
      description: "Enterprise-grade application development.",
      icon: DiJava,
      gradient: { from: "from-red-500", to: "to-orange-600" }
    }
  ],
  Frontend: [
    {
      name: "React",
      description: "Create modern user interfaces and web applications.",
      icon: DiReact,
      gradient: { from: "from-cyan-400", to: "to-blue-500" }
    },
    {
      name: "Vue",
      description: "Progressive framework for building user interfaces.",
      icon: SiVuedotjs,
      gradient: { from: "from-green-400", to: "to-emerald-600" }
    },
    {
      name: "Angular",
      description: "Enterprise-ready web application framework.",
      icon: SiAngular,
      gradient: { from: "from-red-500", to: "to-pink-600" }
    }
  ],
  Backend: [
    {
      name: "Express",
      description: "Build web APIs and applications with Node.js.",
      icon: DiNodejs,
      gradient: { from: "from-green-400", to: "to-emerald-600" }
    },
    {
      name: "Docker",
      description: "Container deployment and orchestration.",
      icon: SiDocker,
      gradient: { from: "from-blue-400", to: "to-indigo-600" }
    },
    {
      name: "GraphQL",
      description: "Build flexible and efficient APIs.",
      icon: SiGraphql,
      gradient: { from: "from-pink-400", to: "to-purple-600" }
    }
  ],
  Mobile: [
    {
      name: "Flutter",
      description: "Cross-platform mobile app development.",
      icon: SiFlutter,
      gradient: { from: "from-blue-400", to: "to-cyan-500" }
    },
    {
      name: "Swift",
      description: "Native iOS application development.",
      icon: SiSwift,
      gradient: { from: "from-orange-400", to: "to-red-500" }
    },
    {
      name: "Kotlin",
      description: "Modern Android app development.",
      icon: SiKotlin,
      gradient: { from: "from-purple-400", to: "to-indigo-500" }
    }
  ],
  Database: [
    {
      name: "PostgreSQL",
      description: "Advanced relational database management.",
      icon: SiPostgresql,
      gradient: { from: "from-blue-400", to: "to-indigo-500" }
    },
    {
      name: "MongoDB",
      description: "Modern document-based NoSQL database.",
      icon: SiMongodb,
      gradient: { from: "from-green-500", to: "to-emerald-600" }
    },
    {
      name: "Redis",
      description: "In-memory data structure store and cache.",
      icon: SiRedis,
      gradient: { from: "from-red-400", to: "to-red-600" }
    },
    {
      name: "Firebase",
      description: "Real-time NoSQL and serverless platform.",
      icon: SiFirebase,
      gradient: { from: "from-yellow-400", to: "to-orange-500" }
    }
  ]
};