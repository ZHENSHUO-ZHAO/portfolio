import createPageContext from "./pageContext";

export const projectContent = {
  title: "Project Page",
  projects: [
    {
      category: "Commercial Game Platforms",
      items: [
        {
          title: "YoPlay - Casual Casino Platform",
          company: "DigitCube.com Limited",
          time: "Sep 2014 - Mar 2021",
          desc: "YoPlay is a large-scale, multiplayer casual casino ecosystem built as a social extension of Asia Gaming's traditional titles (Baccarat, Roulette). Styled as an arcade-inspired platform, YoPlay blends fast, interactive slot experiences with synchronous multiplayer features and social mechanics to boost engagement and retention.",
          role: "Analyst Programmer → Product Manager",
          skills: [
            "Egret Engine",
            "TypeScript",
            "WebSocket",
            "DragonBone",
            "Feather",
          ],
        },
        {
          title: "Fish Hunter - Multiplayer Arcade Shooter",
          company: "DigitCube.com Limited",
          time: "Apr 2021 - Apr 2022",
          desc: "Fish Hunter is a fast-paced, real-time multiplayer arcade shooter built to expand Asia Gaming's casual slot portfolio. Designed with responsive physics, rapid projectile interactions, and high-frequency state updates, it became AG's first \"moving slot\" experience — introducing dynamic, skill-based gameplay into a traditionally static product category.",
          role: "Analyst Programmer → Product Manager",
          skills: ["Phaser", "TypeScript", "GoLang", "MongoDB", "WebSocket"],
        },
        {
          title: "Ninja Saga - Social RPG for Facebook & Mobile",
          company: "Emagist Entertainment Limited",
          time: "Jan 2013 - Sep 2014",
          desc: "Ninja Saga is one of Hong Kong's first large-scale casual RPGs on Facebook, inspired by the Naruto universe and designed for global audiences. I contributed to both live operations and the full mobile rebuild, porting the game to Unity3D to support iOS and Android with improved performance, UI, and gameplay responsiveness.",
          role: "Game Developer",
          skills: ["Unity", "C#", "ActionScript 3", "REST API"],
        },
      ],
    },
    {
      category: "Edutainment",
      items: [
        {
          title: "Educational games for the VinCi Tablet (Android)",
          company: "Rullingnet Corporation Limited",
          time: "Mar 2012 - Jan 2013",
          desc: "These four titles were developed for the VinCi Tablet, a preschool-focused educational device distributed in the US and Canadian markets. Each app was created in collaboration with an education professor in Canada to support early-childhood cognitive and behavioral learning through structured gameplay.",
          role: "Game Programmer",
          releases: [
            "How Many Pins?",
            "I Know 100!",
            "Being Considerate",
            "Playground",
          ],
          skills: ["Unity3D", "C#", "Android SDK", "Java"],
        },
        {
          title: "VTech Global Releases",
          company: "VTech Electronics Limited",
          time: "Jul 2010 - Mar 2012",
          desc: "These titles were designed for VTech's global preschool gaming consoles, including V.Smile Motion, V.Reader, and InnoTab. Each game was produced under strict IP and educational standards in collaboration with licensors such as Disney, Pixar, and Sanrio, and released across the US, UK, and EU markets.",
          role: "Game Designer",
          releases: ["Cars 2", "Hello Kitty (2 titles)", "Brave"],
          skills: [
            "ActionScript 3",
            "Gameplay Design",
            "Level Design",
            "Story Writing",
            "Curriculum Fitting",
            "Voice Talent Coordination",
          ],
        },
      ],
    },
    {
      category: "Research & Experimental Projects",
      items: [
        {
          title: "Jack's Adventure and The Mighty Ant",
          company: "Self-employed",
          time: "Apr 2010 - June 2010",
          desc: "Jack's Adventure and The Mighty Ant are two independently developed, EEG-controlled RPG games that extend my previous research experience with Brainsic. Designed for children with attention and focus training needs, both titles use NeuroSky brainwave inputs to drive in-game mechanics and provide real-time feedback.",
          role: "Independent Game Developer",
          skills: ["Unity3D", "C#", "NeuroSky SDK"],
        },
        {
          title: "Brainsic",
          company: "PlayLab - The Hong Kong Polytechnic University",
          time: "Oct 2009 - Mar 2010",
          desc: "Brainsic is an EEG-driven music interaction game developed in collaboration with The Hong Kong Polytechnic University and Caritas Medical Centre. Designed for children with ADD, the game uses real-time brainwave data to support focus training and behavioral therapy within clinical settings.",
          role: "Project Assistant",
          skills: ["Unity3D", "C#", "NeuroSky SDK"],
        },
      ],
    },
  ],
};

export const [ProjectPageContext, useProjectPageContext] =
  createPageContext(projectContent);
