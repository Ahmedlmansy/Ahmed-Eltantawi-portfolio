/** @type {import('@/types').AppLab} */
const appLab = {
  eyebrow: "Interactive Viewport",
  heading: "Interactive App Lab",
  description:
    "Explore five Flutter projects in a virtual device preview. Switch apps to see their documented features and technologies.",
  stageLabel: "Project preview",
  viewportLabel: "Interactive viewport",
  apps: [
    {
      id: "fervo",
      name: "Fervo Chat",
      previewTitle: "Fervo Chat",
      previewLabel: "REAL-TIME MESSAGING",
      description:
        "A cross-platform chat app built with Flutter and Firebase.",
      features: [
        { label: "Live conversations", detail: "Cloud Firestore streams" },
        { label: "Sign-in", detail: "OAuth 2.0 social login" },
        { label: "App structure", detail: "MVVM with BLoC / Cubit" },
      ],
    },
    {
      id: "dashboard",
      name: "Responsive Dashboard",
      previewTitle: "Responsive Dashboard",
      previewLabel: "ADAPTIVE INTERFACE",
      description:
        "A multi-platform Flutter dashboard for mobile, tablet, and desktop.",
      features: [
        { label: "Adaptive layout", detail: "LayoutBuilder & MediaQuery" },
        { label: "Reusable UI", detail: "Modular component library" },
        { label: "Typography", detail: "Centralized type system" },
      ],
    },
    {
      id: "skysense",
      name: "SkySense Weather",
      previewTitle: "SkySense",
      previewLabel: "WEATHER",
      description:
        "A location-aware weather app using live REST API data.",
      features: [
        { label: "Local forecast", detail: "Location-aware weather" },
        { label: "Live conditions", detail: "REST API integration" },
        { label: "State & motion", detail: "Cubit, offline-first, Lottie" },
      ],
    },
    {
      id: "shopx",
      name: "ShopX E-Com",
      previewTitle: "ShopX",
      previewLabel: "E-COMMERCE",
      description:
        "A Flutter commerce app focused on merchant product management.",
      features: [
        { label: "Product catalogue", detail: "Add, edit, and update products" },
        { label: "Backend", detail: "RESTful API integration" },
        { label: "Validation", detail: "Endpoint testing with Postman" },
      ],
    },
    {
      id: "newscloud",
      name: "NewsCloud",
      previewTitle: "NewsCloud",
      previewLabel: "NEWS READER",
      description:
        "A news reader that fetches articles from third-party APIs.",
      features: [
        { label: "Article feed", detail: "REST API and JSON data" },
        { label: "Loading", detail: "Pagination and lazy loading" },
        { label: "Reading", detail: "In-app WebView browsing" },
      ],
    },
  ],
};

export default appLab;
