export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  role: string;
  company: string;
  years: string;
  stack: string[];
  summary: string;
  highlights?: string[];
  links?: ProjectLink[];
  category: "professional" | "personal";
};

export const projects: Project[] = [
  {
    slug: "character-sync",
    title: "Character-SYNC",
    role: "Sr. Software Engineer — visionOS / 3D Graphics",
    company: "OnePlanet",
    years: "2025",
    stack: ["visionOS", "RealityKit", "ARKit", "GroupActivities", "SharePlay", "Swift"],
    summary:
      "A visionOS SharePlay app that keeps 3D character experiences in lockstep across multiple Apple Vision Pro devices.",
    highlights: [
      "Built end-to-end on RealityKit + ARKit with GroupActivities transport",
      "Designed for deterministic playback so all participants see the same animation state",
    ],
    category: "professional",
  },
  {
    slug: "gpu-particles-and-text-to-3d",
    title: "GPU Particles & Text-to-3D",
    role: "Sr. Software Engineer — visionOS / 3D Graphics",
    company: "OnePlanet",
    years: "2025",
    stack: ["WebGPU", "WGSL", "Metal", "Three.js", "iOS"],
    summary:
      "GPU-driven particle systems on iOS via Metal and on the web via WebGPU/WGSL, plus a text-to-3D conversion tool built on Three.js.",
    category: "professional",
  },
  {
    slug: "apple-developer-technologies",
    title: "Apple Graphics, Games & ML Frameworks",
    role: "DTS Engineer — GPUs, Games & Machine Learning",
    company: "Apple",
    years: "2016 – 2025",
    stack: ["Metal", "Compositor Services", "RealityKit", "ARKit", "Core Image", "Swift", "Objective-C"],
    summary:
      "Nine years helping developers ship GPU-intensive apps and games on every Apple device since 2016. Wrote sample code and Tech Notes, supported APIs from proposal through release, and answered code-level questions at WWDC and on the developer forums.",
    highlights: [
      "Authored Metal, Compositor Services, RealityKit, ARKit, and Core Image sample code",
      "Supported frameworks across the entire software lifecycle, starting at API proposal",
      "Provided code-level technical support at WWDC and on the developer forums",
    ],
    category: "professional",
  },
  {
    slug: "philosophie-ios",
    title: "iOS Apps, MVPs & Prototypes",
    role: "Sr. Software Engineer iOS",
    company: "Philosophie",
    years: "2014 – 2016",
    stack: ["Swift", "Objective-C", "React Native", "UIKit"],
    summary:
      "Built apps and prototypes with clients across verticals — valet parking, dating, wine tasting, custom eyewear fitting — using lean startup methods. Mentored peers and trained designers in IB storyboards.",
    category: "professional",
  },
  {
    slug: "farmville",
    title: "FarmVille",
    role: "Software Engineer",
    company: "Zynga",
    years: "2011",
    stack: ["ActionScript 3", "PHP", "Flash"],
    summary:
      "Front-end features reaching millions of players. Shipped a full-stack crafting-storage expansion, plus experiment gates and telemetry — with no reported security exploits or major customer-service issues at launch.",
    category: "professional",
  },
  {
    slug: "the-strike-the-catch",
    title: "The Strike & The Catch",
    role: "Game Programmer — Rendering",
    company: "Piranha Games",
    years: "2008",
    stack: ["C++", "HLSL", "SpeedTreeRT", "Wii"],
    summary:
      "Rendering features for two fishing titles: a state-machine-driven time-of-day system that drove fog, lighting, solar orbits, and procedural water reflections; foliage shaders via SpeedTreeRT; led the initial Wii port.",
    category: "professional",
  },
  {
    slug: "ea-sports-pipelines",
    title: "NBA Live 06, FIFA 06 & World Cup 06",
    role: "Software Engineer — Pipeline Automation / Builds",
    company: "Electronic Arts",
    years: "2005 – 2006",
    stack: ["C++", "Build Pipelines", "Xbox 360"],
    summary:
      "Asset processing automation and CI for some of EA's first next-generation sports titles on Xbox 360. Improved the asset pipeline alongside senior engineers and assembled the project archives at ship.",
    category: "professional",
  },
  {
    slug: "mcgill-l-systems-thesis",
    title: "Procedural Plant Growth (Undergraduate Thesis)",
    role: "Computer Science Undergraduate (A−)",
    company: "McGill University",
    years: "2000",
    stack: ["C++", "OpenGL", "RenderMan", "tDOL-Systems", "XML"],
    summary:
      "C++ research software for animating plant growth via procedural modeling. Generated plant architectures with timed deterministic L-Systems, textured surfaces with RenderMan procedural shaders, and previewed models in an OpenGL utility built on a generic XML scene description.",
    highlights: [
      "Influenced the L-System hero rendered on the home page of this site",
    ],
    category: "personal",
  },
];
