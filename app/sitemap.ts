import { MetadataRoute } from "next";

const BASE_URL = "https://lifecompass-ai.vercel.app";

const KEYWORD_SLUGS = [
  "jinsei-mokuhyo-kakikata",
  "career-plan-10nen",
  "life-plan-30dai",
  "jibun-sagashi-self-analysis",
  "ikigai-mitsukeru-houhou",
  "work-life-balance-keikaku",
  "career-change-life-plan",
  "retirement-life-design",
  "personal-mission-statement",
  "life-compass-goals-review",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/chat`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const keywordPages: MetadataRoute.Sitemap = KEYWORD_SLUGS.map((slug) => ({
    url: `${BASE_URL}/keywords/${slug}`,
    lastModified: new Date("2026-03-31"),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...keywordPages];
}
