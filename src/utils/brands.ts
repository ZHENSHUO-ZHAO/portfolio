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
  SiTailwindcss,
  SiFramer,
  SiGithubactions,
  SiAmazondynamodb,
  SiExpress,
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
  FaDocker,
  FaAws,
  FaLinux,
} from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";

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
  "tailwind css": SiTailwindcss,
  "framer motion": SiFramer,
  "github actions": SiGithubactions,
  docker: FaDocker,
  aws: FaAws,
  "aws (ec2, lambda, s3, dynamodb)": FaAws,
  "linux servers": FaLinux,
  mysql: GrMysql,
  dynamodb: SiAmazondynamodb,
  "express.js": SiExpress,
};
