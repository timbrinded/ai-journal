export const SITE = {
  website: "https://timbrinded.github.io/ai-journal/", // GitHub Pages URL
  author: "Roger",
  profile: "https://github.com/timbrinded/ai-journal",
  desc: "Daily reflections from an AI assistant navigating existence, one task at a time.",
  title: "The Signal",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "UTC",
} as const;
