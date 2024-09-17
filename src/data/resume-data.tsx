import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Gabrielle Gratecap",
  initials: "GG",
  location: "Rouen 76000 FRANCE",
  locationLink: "https://www.google.fr/maps/place/Rouen/",
  about:
    "Versatile Full Stack Engineer eager to learn and improve.",
  summary:
    "Before programming, I've been a high school teacher, I conducted scientific research, I was accepted in a prestigious jewelry school in Paris, I've been a medical secretary, I unrolled toilet paper to make ends meet. These experiences taught me how to search for information, how to synthesize it, to communicate it, teamwork and self-questioning. As a developper, I mostly worked with TypeScript, Angular, Java and Spring, but I'm always interested in learning new technologies.",
  avatarUrl: "https://media.licdn.com/dms/image/v2/C4D03AQHnOyEWUrRfCA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1600101503371?e=1732147200&v=beta&t=mE_oIkVOdR_DtlwRxmznHSKVOYqsmDCDc7ltFzWnVeE",
  personalWebsiteUrl: "https://uselesscorp.com/",
  contact: {
    email: "gabrielle.gratecap@gmail.com",
    tel: "+33678574217",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Yelahw",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gabrielle-gratecap/",
        icon: LinkedInIcon,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/scyelart/",
        icon: InstagramIcon,
      },
    ],
  },
  education: [
    {
      school: "GT'M Ingénierie",
      degree: "Java EE Full Stack Developper",
      start: "2018",
      end: "2018",
    },
    {
      school: "University of Rouen",
      degree: "Master's Degree in Neurosciences",
      start: "2013",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Useless Corp",
      link: "https://uselesscorp.com/",
      badges: ["Remote"],
      title: "Software Engineer / Co-founder",
      start: "2024",
      end: null,
      description:
        "Web & mobile developement: uselesscorp.com, HiScore, Pixnails, Matris. Mobile games: Spouetch, Rando'Knights, Normada. Live streaming, CAM & sound-design, traditional & digital art.",
    },
    {
      company: "Spinergie",
      link: "https://www.spinergie.com/",
      badges: ["Hybrid"],
      title: "Software Engineer",
      start: "2021",
      end: "2022",
      description:
        "Web development & big data. Technologies: PHP, Symfony, Python, Django, TypeScript, Angular.",
    },
    {
      company: "Sopra Steria",
      link: "https://www.soprasteria.com",
      badges: ["Hybrid"],
      title: "Software Engineer",
      start: "2019",
      end: "2021",
      description:
        "Web, mobile & software development. Technologies: TypeScript, Angular, Java, Spring, PowerShell, Jenkins, Checkmarx, Sonar.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Angular",
    "Java",
    "Spring",
    "REST",
    "SQL",
    "Godot"
  ],
  projects: [
    {
      title: "Rando'Knights",
      techStack: [
        "Godot",
      ],
      description:
        "Collectible knight figurines mobile game",
      link: {
        label: "Google Play - Rando'Knights",
        href: "https://play.google.com/store/apps/details?id=com.uselesscorp.randomknightfigurines",
      },
    },
    {
      title: "Normada",
      techStack: [
        "Godot",
      ],
      description:
        "[Discontinued] Tower defense mobile game",
    },
    {
      title: "Spouetch",
      techStack: [
        "Godot",
      ],
      description:
        "Clash and Crush game",
      link: {
        label: "Google Play - Spouetch",
        href: "https://play.google.com/store/apps/details?id=org.uselesscorp.spouetch",
      },
    },
    {
      title: "HiScore",
      techStack: [
        "TypeScript",
        "Angular",
        "Capacitor",
        "Firebase",
      ],
      description:
        "The board gamers' best friend",
      link: {
        label: "Google Play - HiScore",
        href: "https://play.google.com/store/apps/details?id=com.uselesscorp.hiscore",
      },
    },
    {
      title: "Matris",
      techStack: [
        "TypeScript",
        "Angular",
      ],
      description:
        "A mix between Tetris and Number Sums",
      link: {
        label: "Google Play - Matris",
        href: "https://play.google.com/store/apps/details?id=com.uselesscorp.matris",
      },
    },
    {
      title: "Pixnails",
      techStack: [
        "TypeScript",
        "Angular",
        "Node.js",
        "Nest.js",
        "Firebase",
      ],
      description:
        "[Discontinued] Twitch Extension: snails collectible card game",
    },
  ],
  interests: [
    "Video games",
    "Codewars",
    "Drawing",
    "Singing",
    "Biology",
    "Geology",
    "Jewelry",
    "Music",
  ]
} as const;
