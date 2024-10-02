import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Gabrielle Gratecap",
  initials: "GG",
  location: "Rouen 76000 FRANCE",
  locationLink: "https://www.google.fr/maps/place/Rouen/",
  about:
    "Versatile Full Stack Engineer.",
  summary: [
    "Before programming, I taught multiple courses to highschool and undergraduate students, I conducted scientific research, I passed an entrance exam in a prestigious jewelry school, I managed a medical office.",
    "These experiences taught me autonomy, organization, efficiency and teamwork. I mastered searching for information, synthesizing it, communicating it.",
    "As a developper, I'm channeling this knowledge to better myself, to constantly learn and improve."
  ],
  avatarUrl: "",
  personalWebsiteUrl: "https://gabrielle-gratecap.dev/",
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
      degree: "Java / Angular Full Stack Developper",
      start: "2018",
      end: "2018",
    },
    {
      school: "University of Rouen",
      degree: "Master's Degree in Neurosciences (Valedictorian)",
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
      missions: [
        {
          position: "", 
          description: "", 
          technologies: [],
        },
      ],      
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
      missions: [
        {
          position: "", 
          description: "", 
          technologies: [],
        },
      ],  
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
      missions: [
        {
          position: "", 
          description: "", 
          technologies: [],
        },
        {
          position: "", 
          description: "", 
          technologies: [],
        },
        {
          position: "", 
          description: "", 
          technologies: [],
        },
        {
          position: "", 
          description: "", 
          technologies: [],
        },
        {
          position: "", 
          description: "", 
          technologies: [],
        },
        {
          position: "", 
          description: "", 
          technologies: [],
        },
      ],  
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
      title: "Online resume",
      subtitle: "This very website!",
      techStack: [
        "React.js",
        "Next.js",
        "GraphQL",
        "Tailwind CSS",
      ],
      description:
        "Template from BartoszJarocki on GitHub.",
      link: {
        label: "Gabrielle Gratecap - Resume",
        href: "https://gabrielle-gratecap.dev",
      },
    },
    {
      title: "Rando'Knights",
      subtitle: "Available on iOS and Android",
      techStack: [
        "Godot",
        "C#",
        "Firebase"
      ],
      description:
        "Collect, sell, sacrifice and upgrade your knight figurines to try to reach the ultimate knight grade!",
      link: {
        label: "Google Play - Rando'Knights",
        href: "https://play.google.com/store/apps/details?id=com.uselesscorp.randomknightfigurines",
      },
    },
    {
      title: "HiScore",
      subtitle: "Available on iOS and Android",
      techStack: [
        "TypeScript",
        "Angular",
        "Capacitor",
        "Firebase",
      ],
      description:
        "HiScore lets you keep all your board games data. Create a game, add players, choose the game and go!",
      link: {
        label: "Google Play - HiScore",
        href: "https://play.google.com/store/apps/details?id=com.uselesscorp.hiscore",
      },
    },
    {
      title: "Matris",
      subtitle: "Available on iOS and Android",
      techStack: [
        "TypeScript",
        "Angular",
        "Capacitor"
      ],
      description:
        "Tiles are falling down! Move them to form 4-tiles lines and earn points. Share your highest score on our discord!",
      link: {
        label: "Google Play - Matris",
        href: "https://play.google.com/store/apps/details?id=com.uselesscorp.matris",
      },
    },
    {
      title: "Spouetch",
      subtitle: "Available on iOS and Android",
      techStack: [
        "Godot",
        "GDScript"
      ],
      description:
        "An arcade mobile game to finally get rid of those annoying flies! Includes 4 mini-games and an amazing soundtrack.",
      link: {
        label: "Google Play - Spouetch",
        href: "https://play.google.com/store/apps/details?id=org.uselesscorp.spouetch",
      },
    },
    {
      title: "Normada",
      subtitle: "Discontinued",
      techStack: [
        "Godot",
        "GDScript"
      ],
      description:
        "You're in charge of the Armada of Rouen. Place food, drink and information stalls, park the tallest ships, and try to satisfy the never-ending stream of visitors!",
    },
    {
      title: "Pixnails",
      subtitle: "Discontinued",
      techStack: [
        "TypeScript",
        "Angular",
        "Node.js",
        "Nest.js",
        "Firebase",
      ],
      description:
        "You're a twitch streamer and you're afraid your viewers are bored? With the Pixnails Twitch extension, they can collect shells to buy boosters and get a chance to find the rarest snail cards!",
    },
  ],
  interests: [
    {
      title: "Programming", 
      description: "React Certification on Scrimba, Kata practice on Codewars, CSSBattle with friends, CodinGame.", 
      link: {
        label: "Codewars profile",
        href: "https://www.codewars.com/users/Yelahw",
      },
    },
    {
      title: "Video games", 
      description: "Competitive MOBA, FPS, MMO, strategy and simulation games.",
    },
    {
      title: "Manual activities", 
      description: "I followed a drawing night class for 2 years. I still practice both traditional and digital drawing. I enjoy animation, jewelry, embroidery, pottery and building PCs.",
      link: {
        label: "Instagram",
        href: "https://www.instagram.com/scyelart/",
      },
    },
    {
      title: "Music", 
      description: "I played music for 10 years. Sometimes I open Cubase and play around with CAM. I love singing under the shower or any other place where no one can hear me.",
    },
  ]
} as const;
