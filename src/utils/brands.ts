import type { IconType } from "react-icons";
import {
  SiJira,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiLua,
  SiAdobephotoshop,
  SiAutodeskmaya,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import {
  FaTrello,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGolang,
  FaGitlab,
  FaUnity,
  FaAndroid,
  FaJava,
} from "react-icons/fa6";

export default function getBrandIcon(name: string): IconType | null {
  return iconMap[name.toLowerCase()] ?? null;
}

const iconMap: Record<string, IconType> = {
  jira: SiJira,
  trello: FaTrello,
  react: FaReact,
  "react.js": FaReact,
  redux: SiRedux,
  typescript: SiTypescript,
  "node.js": FaNodeJs,
  github: FaGithub,
  mongodb: SiMongodb,
  golang: FaGolang,
  gitlab: FaGitlab,
  unity3d: FaUnity,
  lua: SiLua,
  "android sdk": FaAndroid,
  java: FaJava,
  photoshop: SiAdobephotoshop,
  maya: SiAutodeskmaya,
  "after effects": SiAdobeaftereffects,
  premiere: SiAdobepremierepro,
};
