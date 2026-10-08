/** @type {import('@/types').Project[]} */
const projects = [
  {
    id: "fervo-chat",
    title: "Fervo Chat",
    category: "Featured Flagship",
    focus: "Real-Time Messaging",
    description:
      "A cross-platform chat application built with Flutter and Firebase, with MVVM architecture, BLoC/Cubit state management, Cloud Firestore streams, and OAuth 2.0 social logins.",
    stack: ["Flutter", "Firebase", "BLoC / Cubit", "MVVM", "Cloud Firestore", "OAuth 2.0"],
    preview: "chat",
    links: {
      github: "https://github.com/ahmed-eltantawi/Fervo-chat-app",
      releases: "https://github.com/ahmed-eltantawi/Fervo-chat-app/releases",
    },
  },
  {
    id: "responsive-dashboard",
    title: "Responsive Admin Dashboard",
    category: "Multi-Platform",
    focus: "Adaptive UI",
    description:
      "A Flutter dashboard for mobile, tablet, and desktop, using LayoutBuilder and MediaQuery with a reusable component library and custom typography system.",
    stack: ["Flutter", "Dart", "Adaptive UI", "LayoutBuilder", "MediaQuery"],
    preview: "dashboard",
    links: {
      github: "https://github.com/ahmed-eltantawi/responsive-dashboard",
      releases: "https://github.com/ahmed-eltantawi/responsive-dashboard/releases",
    },
  },
  {
    id: "skysense",
    title: "SkySense — Weather App",
    category: "Atmospheric App",
    focus: "Weather & Geolocation",
    description:
      "A location-aware weather app with live REST API data, condition-adaptive Lottie animations, and offline-first capabilities using Cubit.",
    stack: ["Flutter", "REST API", "Cubit", "Lottie", "Offline-First"],
    preview: "weather",
    links: {
      github: "https://github.com/ahmed-eltantawi/SkySense",
      releases: "https://github.com/ahmed-eltantawi/SkySense/releases",
    },
  },
  {
    id: "shopx",
    title: "ShopX — E-Commerce App",
    category: "Commerce",
    focus: "Product Management",
    description:
      "A minimalist Flutter commerce app for merchants to add, edit, and update products, with REST API integration and endpoint testing using Postman.",
    stack: ["Flutter", "REST API", "BLoC", "Postman"],
    preview: "commerce",
    links: {
      github: "https://github.com/ahmed-eltantawi/shopx",
      releases: "https://github.com/ahmed-eltantawi/shopx/releases",
    },
  },
  {
    id: "newscloud",
    title: "NewsCloud — News App",
    category: "Content Reader",
    focus: "News & Reading",
    description:
      "A Flutter news reader that fetches JSON from third-party APIs, with pagination, lazy loading, and in-app WebView article browsing.",
    stack: ["Flutter", "REST API", "JSON", "Pagination", "WebView"],
    preview: "news",
    links: {
      github: "https://github.com/ahmed-eltantawi/News_Cloud",
      releases: "https://github.com/ahmed-eltantawi/News_Cloud/releases",
    },
  },
];

export default projects;
