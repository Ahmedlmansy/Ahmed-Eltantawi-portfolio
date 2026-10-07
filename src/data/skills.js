/** @type {import('@/types').SkillSet} */
const skills = {
  eyebrow: "Technical Mastery",
  heading: "Engineering Tooling & Stack",
  description:
    "Mobile development, state management, APIs, data, and engineering practices documented across Ahmed's projects and experience.",
  groups: [
    {
      title: "Mobile Core & Flutter",
      description:
        "Cross-platform apps for Android and iOS, adaptive layouts, and reusable mobile interfaces.",
      icon: "mobile",
      accent: "sage",
      items: [
        "Flutter",
        "Dart",
        "Android",
        "iOS",
        "Cross-Platform Development",
        "Adaptive UI",
        "LayoutBuilder & MediaQuery",
        "Reusable Component Library",
        "Custom Typography System",
        "In-App WebView",
        "Lottie Animations",
      ],
    },
    {
      title: "State Management",
      description:
        "Reactive app state and clear separation between presentation and business logic.",
      icon: "state",
      accent: "blue",
      items: ["BLoC", "Cubit", "MVVM", "Separation of Concerns"],
    },
    {
      title: "Architecture & Engineering",
      description:
        "Application structure and software engineering principles applied across mobile projects.",
      icon: "architecture",
      accent: "sage",
      items: ["Clean Architecture", "Software Engineering Principles", "System Design"],
    },
    {
      title: "Backend & APIs",
      description:
        "API integration, authentication, data serialization, and efficient content loading.",
      icon: "cloud",
      accent: "blue",
      items: [
        "REST APIs",
        "Cloud Firestore Streams",
        "JSON Parsing & Serialization",
        "OAuth 2.0",
        "Postman",
        "Pagination & Lazy Loading",
        "Offline-First Architecture",
      ],
    },
    {
      title: "Databases & Developer Tools",
      description:
        "Cloud and local data technologies alongside the development tools listed in the audit.",
      icon: "database",
      accent: "sage",
      items: [
        "Firebase",
        "SQLite",
        "Git",
        "GitHub",
        "Android Studio",
        "VS Code",
        "Python",
      ],
    },
    {
      title: "Computer Science & Collaboration",
      description:
        "Academic foundations, agile teamwork, code reviews, and communication skills.",
      icon: "foundations",
      accent: "sand",
      items: [
        "OOP",
        "Data Structures",
        "Algorithms",
        "Information Systems",
        "Web Development",
        "Machine Learning & AI Basics",
        "Agile Methodology",
        "Code Reviews",
        "Technical Presentations",
        "Problem Solving & Mathematics",
        "Leadership & Group Dynamics",
      ],
    },
  ],
};

export default skills;
