import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { InstagramIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Gabrielle Gratecap",
  initials: "GG",
  location: "Rouen 76000 FRANCE",
  locationLink: "https://www.google.fr/maps/place/Rouen/",
  about: "Full Stack Engineer",
  summary: [
    "Before programming, I taught multiple courses to highschool and undergraduate students, I conducted scientific research, I passed an entrance exam in a prestigious jewelry school, I managed a medical office.",
    "These experiences taught me autonomy, organization, efficiency and teamwork. I mastered searching for information, synthesizing it, communicating it.",
    "As a developper, I'm channeling this knowledge to better myself, to constantly learn and improve.",
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
      badges: ["Part-time", "Remote"],
      title: "Software Engineer / Co-founder",
      start: "2022",
      end: null,
      missions: [
        {
          title: "Online Resume : gabrielle.gratecap.dev",
          description:
            "This web project aimed to improve my online presence and test my React.js skills.",
          technologies: [
            "React.js",
            "Next.js",
            "GraphQL",
            "Tailwind CSS",
            "Netlify",
          ],
        },
        {
          title: "Rando'Knights",
          description:
            "Mobile game developed on Godot, it counts 10k+ downloads and maintains a small but dedicated Discord community.",
          technologies: ["Godot", "C#", "Firebase"],
        },
        {
          title: "HiScore",
          description:
            "Mobile app that counts 5k+ downloads and a 4.4 rating on Google Play.",
          technologies: ["TypeScript", "Angular", "Capacitor", "Firebase"],
        },
        {
          title: "Matris",
          description:
            "Small mobile game, a combination of Tetris and Number Sums.",
          technologies: ["TypeScript", "Angular", "Capacitor"],
        },
        {
          title: "Spouetch",
          description:
            "Small mobile game developed on Godot, has a 5.0 rating on Google Play",
          technologies: ["Godot", "GDScript"],
        },
        {
          title: "Normada",
          description:
            "Mobile management game developed on Godot, it became too big and too complex to our taste and ultimately got discontinued.",
          technologies: ["Godot", "GDScript"],
        },
        {
          title: "Pixnails",
          description:
            "Twitch extension web app, it required continuous design and pixel art work that we ultimately lost motivation for. The servers are currently down.",
          technologies: [
            "TypeScript",
            "Angular",
            "Node.js",
            "Nest.js",
            "Firebase",
          ],
        },
      ],
    },
    {
      company: "Spinergie",
      link: "https://www.spinergie.com/",
      badges: ["Full-time", "Hybrid"],
      title: "Full Stack Engineer",
      start: "2021",
      end: "2022",
      missions: [
        {
          title: "Make the Maritime Industry Smarter and Greener",
          description:
            "Solutions for a sustainable and efficient maritime industry : transform operational and maritime data into actionable insights to reduce carbon footprint and increase efficiency. Track 14k+ vessels all over the world.",
          technologies: [
            "TypeScript",
            "Angular",
            "PHP",
            "Symfony",
            "Python",
            "Django",
            "Google API",
          ],
        },
      ],
    },
    {
      company: "Sopra Steria",
      link: "https://www.soprasteria.com",
      badges: ["Full-time", "Hybrid"],
      title: "Full Stack Engineer",
      start: "2019",
      end: "2021",
      missions: [
        {
          title: "MyWay",
          description:
            "In-house employees management application, its developement became crucial during COVID for multiple French angencies.",
          technologies: [
            "TypeScript",
            "Angular",
            "Java",
            "Spring",
            "Hibernate",
            "Maven",
            "JUnit",
            "Karma",
            "Jasmine",
            "SQL",
            "PostgreSQL",
            "REST",
            "Material",
            "Protractor",
            "Gherkin",
            "Selenium",
            "Jenkins",
            "Sonar",
            "Checkmarx",
            "Agile",
          ],
        },
        {
          title: "Public administration",
          description:
            "Software developement and integration for document dematerialization. Script automations and on-site system installations.",
          technologies: [
            "FreeMind",
            "Java",
            "JScript",
            "PowerShell",
            "Jenkins",
            "LaTeX",
          ],
        },
        {
          title: "Public administration",
          description:
            "Integration and maintenance of multiple mail generation procedures as a solo-developer.",
          technologies: ["Java", "XML"],
        },
        {
          title: "Public administration",
          description: "Redesign and upgrade of a city tourism mobile app.",
          technologies: [
            "TypeScript",
            "Angular",
            "Ionic",
            "PHP",
            "Elasticsearch",
            "Jenkins",
            "Google API",
          ],
        },
        {
          title: "Public administration",
          description:
            "Development from-scratch of a national collection process web app. Product design, product demo, mentoring.",
          technologies: [
            "TypeScript",
            "Angular",
            "Java",
            "Spring",
            "Material",
            "Bootstrap",
          ],
        },
        {
          title: "Side activities",
          description:
            "Self-studies, tech community participation, gaming association volunteering (tournament, event, and production planning), public presentation at the 2019 'Codeurs en Seine' symposium.",
          technologies: ["WinDev", "PL/SQL", "Oracle Policy Automation"],
        },
      ],
    },
  ],
  projects: [
    {
      title: "Online resume",
      subtitle: "This very website!",
      description: "Template from BartoszJarocki on GitHub.",
      link: {
        label: "Gabrielle Gratecap - Resume",
        href: "https://gabrielle-gratecap.dev",
      },
    },
    {
      title: "Rando'Knights",
      subtitle: "Available on iOS and Android",
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
      description:
        "You're in charge of the Armada of Rouen. Place food, drink and information stalls, park the tallest ships, and try to satisfy the never-ending stream of visitors!",
    },
    {
      title: "Pixnails",
      subtitle: "Discontinued",
      description:
        "You're a twitch streamer and you're afraid your viewers are bored? With the Pixnails Twitch extension, they can collect shells to buy boosters and get a chance to find the rarest snail cards!",
    },
  ],
  activities: [
    {
      title: "Programming",
      description:
        "React Certification on Scrimba, Kata practice on Codewars, CSSBattle with friends, CodinGame.",
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
      description:
        "I followed a drawing night class for 2 years. I still practice both traditional and digital drawing. I enjoy animation, jewelry, embroidery, pottery and building PCs.",
      link: {
        label: "Instagram",
        href: "https://www.instagram.com/scyelart/",
      },
    },
    {
      title: "Music",
      description:
        "I played music for 10 years. Sometimes I open Cubase and play around with CAM. I love singing under the shower or any other place where no one can hear me.",
    },
  ],
} as const;
