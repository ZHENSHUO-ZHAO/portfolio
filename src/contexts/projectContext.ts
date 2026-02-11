import type { IconType } from "react-icons";
import createPageContext from "./pageContext";
import type {
  CarouselData,
  ContactButtonInfo,
  ContextPageBase,
  Header,
  Heading,
  Stat,
  Tag,
} from "./pageContext";
import {
  FaRocket,
  FaLayerGroup,
  FaCode,
  FaBuilding,
  FaGraduationCap,
  FaFlask,
  FaUsers,
  FaGlobe,
  FaGamepad,
  FaBolt,
  FaFacebook,
  FaMobileScreen,
  FaChild,
  FaCopyright,
  FaBrain,
  FaHeartPulse,
  FaHospital,
  FaMusic,
  FaUserDoctor,
  FaCircle,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import { cv, email } from "../utils/constants";
import { createImageDataBatch } from "../utils/util";

const yoplayScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/yoplay/yp_*.webp", {
    eager: true,
    import: "default",
  }),
);
const fishHunterScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/fish_hunter/fh_*.webp", {
    eager: true,
    import: "default",
  }),
);
const ninjaSagaScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/ninja_saga/ns_*.webp", {
    eager: true,
    import: "default",
  }),
);

const vinciScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/vinci/vc_*.webp", {
    eager: true,
    import: "default",
  }),
);

const vtechScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/vtech/vt_*.webp", {
    eager: true,
    import: "default",
  }),
);

const jamaScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/jama/jama_*.webp", {
    eager: true,
    import: "default",
  }),
);

const brainsicScreenshots: string[] = Object.values(
  import.meta.glob("../assets/images/project/brainsic/bs_*.webp", {
    eager: true,
    import: "default",
  }),
);

export type ProjectCategory = {
  category: string;
  definition: string;
  icon: IconType;
  items: ProjectItem[];
};

export type ProjectItem = {
  title: string;
  id: string;
  company: string;
  time: string;
  isSelfemployed?: true;
  roles: string[];
  desc: string;
  releases?: string[];
  skills: string[];
  tags: Tag[];
  screenshots?: CarouselData;
};

export type ProjectContent = ContextPageBase & {
  header: Header;
  stats: Stat[];
  projects: {
    commercial: ProjectCategory;
    edutainment: ProjectCategory;
    research: ProjectCategory;
  };
  impact: { heading: Heading; items: Stat[] };
  contact: { heading: Heading; items: ContactButtonInfo[] };
};

export const projectContent = {
  pageTitle: "Notable Projects",
  header: {
    tag: { icon: FaRocket, text: "Featured Work" },
    title: "Notable Projects",
    statement: [
      [
        { text: "From " },
        {
          text: "multiplayer platforms",
          style: "font-bold text-(--color-statement-1)",
        },
        { text: " to " },
        {
          text: "educational games",
          style: "font-bold text-(--color-statement-2)",
        },
        { text: " to " },
        {
          text: "experimental research",
          style: "font-bold text-(--color-statement-3)",
        },
      ],
    ],
  },
  stats: [
    { icon: FaLayerGroup, amount: "3", unit: "Categories" },
    { icon: FaCode, amount: "7", unit: "Projects" },
  ],
  projects: {
    commercial: {
      category: "Commercial Game Platforms",
      definition:
        "Large-scale multiplayer platforms and social games built for global audiences",
      icon: FaBuilding,
      items: [
        {
          title: "YoPlay - Casual Casino Platform",
          id: "yoplay",
          company: "DigitCube.com Limited",
          time: "Sep 2014 - Mar 2022",
          desc: "YoPlay is a large-scale, multiplayer casual casino ecosystem built as a social extension of Asia Gaming's traditional titles (Baccarat, Roulette). Styled as an arcade-inspired platform, YoPlay blends fast, interactive slot experiences with synchronous multiplayer features and social mechanics to boost engagement and retention.",
          roles: ["Analyst Programmer", "Product Manager"],
          skills: [
            "Egret Engine",
            "TypeScript",
            "WebSocket",
            "DragonBone",
            "Feather",
          ],
          tags: [
            { icon: FaUsers, text: "Multiplayer" },
            { icon: FaGlobe, text: "Asia Markets" },
          ],
          screenshots: {
            aspectRatio: 1.596,
            images: createImageDataBatch(yoplayScreenshots, [
              "YoPlay platform lobby displaying available casino games, user balance, and main navigation.",
              "Birds and Beasts multiplayer slot game interface showing animal-based betting options.",
              "Benz multiplayer slot game interface featuring bets based on premium car brands.",
              "San Gong multiplayer card game interface based on traditional Chinese poker rules.",
              "Forest Dance single-player slot game interface with animal-themed betting mechanics.",
              "Benz single-player slot game interface featuring premium car brand symbols.",
              "Lucky Fruits single-player slot game interface with fruit-themed slot mechanics.",
              "Horse Racing single-player betting game interface showing race selections and odds.",
              "Guess single-player number betting game interface with random number selection.",
              "Asia Gaming Master Tournament results screen for August 2019 showing player rankings.",
            ]),
          },
        },
        {
          title: "Fish Hunter - Multiplayer Arcade Shooter",
          id: "fish-hunter",
          company: "DigitCube.com Limited",
          time: "Apr 2021 - Apr 2022",
          desc: "Fish Hunter is a fast-paced, real-time multiplayer arcade shooter built to expand Asia Gaming's casual slot portfolio. Designed with responsive physics, rapid projectile interactions, and high-frequency state updates, it became AG's first \"moving slot\" experience - introducing dynamic, skill-based gameplay into a traditionally static product category.",
          roles: ["Analyst Programmer", "Product Manager"],
          skills: ["Phaser", "TypeScript", "GoLang", "MongoDB", "WebSocket"],
          tags: [
            { icon: FaGamepad, text: "Real-time Physics" },
            { icon: FaBolt, text: "High-frequency Updates" },
          ],
          screenshots: {
            aspectRatio: 1.765,
            images: createImageDataBatch(fishHunterScreenshots, [
              "Fish Hunter platform lobby showing three game variants: Fish Hunter 3D, Fish Park, and Traditional Fish Hunter, along with user balance, main navigation, and a recent jackpot winner.",
              "Fish Hunter 3D room selection screen displaying multiple rooms with different multipliers, recent jackpot winners, and a weekly top-10 ranking list.",
              "Fish Hunter 3D gameplay screen showing animated fish swimming across the scene while players shoot fish using various assisted targeting options.",
              "Fish Park gameplay screen featuring cartoon-style fish, a jellyfish surrounded by treasure chests, and a golden giant tortoise entering the scene.",
              "Fish Park gameplay screen showing a player capturing a treasure chest from a jellyfish and receiving 15,000 gold coins.",
              "Fish Park gameplay screen highlighting the arrival of the boss character 'Treasure Crab' carrying large amounts of treasure.",
              "Traditional Fish Hunter gameplay screen showing animated fish surrounding a central treasure chest.",
              "Traditional Fish Hunter gameplay screen featuring the boss character 'Explosive Fish,' which triggers area-wide effects when defeated.",
            ]),
          },
        },
        {
          title: "Ninja Saga - Social RPG for Facebook & Mobile",
          id: "ninja-saga",
          company: "Emagist Entertainment Limited",
          time: "Jan 2013 - Sep 2014",
          desc: "Ninja Saga is one of Hong Kong's first large-scale casual RPGs on Facebook, inspired by the Naruto universe and designed for global audiences. I contributed to both live operations and the full mobile rebuild, porting the game to Unity3D to support iOS and Android with improved performance, UI, and gameplay responsiveness.",
          roles: ["Game Developer"],
          skills: ["Unity3D", "C#", "ActionScript 3", "REST API"],
          tags: [
            { icon: FaFacebook, text: "Facebook Platform" },
            { icon: FaMobileScreen, text: "iOS & Android" },
          ],
          screenshots: {
            aspectRatio: 1.765,
            images: createImageDataBatch(ninjaSagaScreenshots, [
              "Ninja Saga platform lobby displaying a ninja village hub with surrounding temples used as navigation menus around the central battle area.",
              "Battle interface showing player and enemy statistics, including stamina, special abilities, and combat options.",
              "Clan battle dashboard allowing players to join clans, participate in clan battles, and earn reputation to increase clan rank.",
              "Clan shop interface where players can purchase weapons and consumable items to support clan battles.",
              "Fifth anniversary event screen featuring Ninjutsu card challenges that require tokens and offer special rewards.",
              "Fifth anniversary event screen showing pet upgrade mechanics used to obtain specific weapon rewards.",
              "Pet fusion system interface allowing players to combine two trained pets into a new upgraded pet.",
              "Daily spin feature screen providing a daily lucky draw reward for players who log in each day.",
            ]),
          },
        },
      ],
    },
    edutainment: {
      category: "Edutainment",
      definition:
        "Educational games and interactive learning experiences for children",
      icon: FaGraduationCap,
      items: [
        {
          title: "Educational games for the VinCi Tablet (Android)",
          id: "vinci",
          company: "Rullingnet Corporation Limited",
          time: "Mar 2012 - Jan 2013",
          desc: "These four titles were developed for the VinCi Tablet, a preschool-focused educational device distributed in the US and Canadian markets. Each app was created in collaboration with an education professor in Canada to support early-childhood cognitive and behavioral learning through structured gameplay.",
          roles: ["Game Programmer"],
          releases: [
            "How Many Pins?",
            "I Know 100!",
            "Being Considerate",
            "Playground",
          ],
          skills: ["Unity3D", "C#", "Android SDK", "Java"],
          tags: [
            { icon: FaChild, text: "Preschool Education" },
            { icon: FaGlobe, text: "US & CA Markets" },
          ],
          screenshots: {
            aspectRatio: 1.66,
            images: createImageDataBatch(vinciScreenshots, [
              "Home screen of the educational game 'How Many Pins?' showing a bowling ball striking colorful pins with a play button centered on the screen.",
              "Bowling lane gameplay screen where the learner drags a bowling ball toward colorful pins, with the total number of pins displayed on screen.",
              "Gameplay screen showing knocked-down pins as the learner selects how many pins fell to practice basic subtraction.",
              "Home screen of the educational game 'I Know 100!' showing the Vinci baby character flying a rocket above colorful blocks with a play button in the center.",
              "Block-building activity where the learner drags same-colored blocks to form a vertical column of ten.",
              "Completed block activity showing three columns of ten blocks, with feedback indicating that the total equals thirty.",
              "Home screen of the educational game 'Being Considerate' showing the Vinci baby character shopping with animal friends in a supermarket, with a play button displayed.",
              "Story scenario where the Vinci baby character encounters a monkey friend struggling to carry groceries.",
              "Decision-making screen asking the learner to choose how the Vinci baby should act considerately, either by walking away or helping by pulling the shopping cart.",
            ]),
          },
        },
        {
          title: "VTech Global Releases",
          id: "vtech",
          company: "VTech Electronics Limited",
          time: "Jul 2010 - Mar 2012",
          desc: "These titles were designed for VTech's global preschool gaming consoles, including V.Smile Motion, V.Reader, and InnoTab. Each game was produced under strict IP and educational standards in collaboration with licensors such as Disney, Pixar, and Sanrio, and released across the US, UK, and EU markets.",
          roles: ["Game Designer"],
          releases: [
            "Cars 2",
            "Hello Kitty (V.Reader)",
            "Hello Kitty (InnoTab)",
            "Brave",
          ],
          skills: [
            "ActionScript 3",
            "Gameplay Design",
            "Level Design",
            "Story Writing",
            "Curriculum Fitting",
            "Voice Talent Coordination",
          ],
          tags: [
            { icon: FaCopyright, text: "Disney, Pixar, Sanrio IP" },
            { icon: FaGlobe, text: "US, UK, EU Markets" },
          ],
          screenshots: {
            aspectRatio: 1.333,
            images: createImageDataBatch(vtechScreenshots, [
              "Cover of Disney Pixar Cars 2 for V.Smile Motion console, showing Lightning McQueen and Tow Mater smiling in their village. Teaches vocabulary, spelling, geography, counting, and more for 4-to-6-year-olds.",
              "Cover of Hello Kitty’s Surprise! for V.Reader, showing Hello Kitty surprised by friends at a birthday party. Teaches syllables, plural/singular, letter sounds, character traits, and more for 3-to-5-year-olds.",
              "Cover of A Day With Hello Kitty and Friends for InnoTab, showing Hello Kitty playing with friends under a sun and rainbow. Teaches music, memory, math, creativity, and more for 3-to-6-year-olds.",
              "Cover of Disney Pixar Brave for InnoTab, showing Merida confidently aiming an arrow with her bow. Teaches math, logic, problem solving, creativity, and more for 4-to-7-year-olds.",
            ]),
          },
        },
      ],
    },
    research: {
      category: "Research & Experimental Projects",
      definition:
        "Pioneering work in EEG-controlled games and neurofeedback applications",
      icon: FaFlask,
      items: [
        {
          title: "Jack's Adventure and The Mighty Ant",
          id: "indie",
          company: "Self-employed",
          time: "Apr 2010 - June 2010",
          desc: "Jack's Adventure and The Mighty Ant are two independently developed, EEG-controlled RPG games that extend my previous research experience with Brainsic. Designed for children with attention and focus training needs, both titles use NeuroSky brainwave inputs to drive in-game mechanics and provide real-time feedback.",
          isSelfemployed: true,
          roles: ["Independent Game Developer"],
          skills: ["Unity3D", "C#", "NeuroSky SDK"],
          tags: [
            { icon: FaBrain, text: "EEG-Controlled" },
            { icon: FaHeartPulse, text: "Focus Training" },
          ],
          screenshots: {
            aspectRatio: 1.333,
            images: createImageDataBatch(jamaScreenshots, [
              "Home screen of 'Jack's Adventure' - The main character Jack flying in a rocket with the navigation menu, ready to save an imaginary planet from environmental crises.",
              "Shooting water in 'Jack's Adventure' - Player uses attention detected by a Neurosky headset to control Jack's rocket and spray water to prevent drought.",
              "Growing plants in Jack's Adventure' - Player uses attention to make plants grow and protect polar icebergs from melting within the time limit.",
              "Knocking down factories in Jack's Adventure' - Player uses attention to shoot bombs from Jack's rocket to stop industrial pollution.",
              "Game winning screen in Jack's Adventure' - Shows mission completion time, best time, Macrotellect attention score, and bonus environmental tips.",
              "Home screen of 'The Mighty Ant' - 3D cartoon ant posing a victory sign with navigation menu.",
              "CogniScore page in 'The Mighty Ant' - Defines player's attention control abilities using a point-based levelling system.",
              "Pushing chocolate ball in 'The Mighty Ant' - Player uses attention to guide the ant's food along the beach while forming a protective shield against falling coconuts.",
              "Pushing chocolate ball in snowy mountain - Player uses attention to control the ant to move food safely along a snowy slope.",
              "Pushing marshmallow in incline road - Player uses attention to guide the ant's food up a curving incline.",
              "Reaching goal with colorful donut - Player uses attention to successfully guide the ant's food into the goal.",
            ]),
          },
        },
        {
          title: "Brainsic",
          id: "brainsic",
          company: "PlayLab - The Hong Kong Polytechnic University",
          time: "Oct 2009 - Mar 2010",
          desc: "Brainsic is an EEG-driven music interaction game developed in collaboration with The Hong Kong Polytechnic University and Caritas Medical Centre. Designed for children with ADD, the game uses real-time brainwave data to support focus training and behavioral therapy within clinical settings.",
          roles: ["Project Assistant"],
          skills: ["Unity3D", "C#", "NeuroSky SDK"],
          tags: [
            { icon: FaHospital, text: "Clinical Research" },
            { icon: FaMusic, text: "Music Interaction" },
            { icon: FaUserDoctor, text: "ADD Therapy" },
          ],
          screenshots: {
            aspectRatio: 1.333,
            images: createImageDataBatch(brainsicScreenshots, [
              "Brainsic home page featuring colorful music blocks in the background, the PlayLab Hong Kong Polytechnic University logo, and the main navigation menu.",
              "Gameplay interface showing a character flying along lanes with diamonds while musical instruments are triggered based on a low attention level of 50 percent, activating drums and guitar.",
              "Gameplay interface showing a character flying along lanes with diamonds while musical instruments are triggered based on a high attention level of 90 percent, activating drums, guitar, bass, and keyboard.",
              "Round completion screen displaying trophies earned by the player and available navigation options.",
              "Introduction screen presenting the NeuroSky brain-sensing headset used to measure player attention.",
            ]),
          },
        },
      ],
    },
  },
  impact: {
    heading: {
      title: "Project Impact",
      desc: "A decade of building meaningful experiences",
    },
    items: [
      {
        amount: "7",
        unit: "Major Projects",
      },
      {
        amount: "6",
        unit: "Global Markets",
      },
      {
        amount: "5+",
        unit: "Platforms",
      },
      {
        amount: "10+",
        unit: "Years Experience",
      },
    ],
  },
  contact: {
    heading: {
      tag: { icon: FaCircle, text: "Available for opportunities" },
      title: "Interested in Working Together?",
      desc: "I'm always open to discussing new projects, creative ideas, or opportunities to bring engaging experiences to life.",
    },
    items: [
      {
        heading: { tag: { icon: FaEnvelope }, title: "Get in Touch", desc: "" },
        contact: { href: email },
      },
      {
        heading: { tag: { icon: FaDownload }, title: "View Resume", desc: "" },
        contact: { href: cv, download: true },
      },
    ],
  },
} satisfies ProjectContent;

export const [ProjectPageContext, useProjectPageContext] =
  createPageContext(projectContent);
