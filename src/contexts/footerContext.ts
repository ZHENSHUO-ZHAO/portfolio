import { createContext, useContext } from "react";
import type { IconType } from "react-icons";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";

export type Contact = {
  icon: IconType;
  href: string;
  target?: string;
  rel?: string;
};

export type FooterContent = {
  declaration: string;
  contact: Contact[];
};

export const footerContent: FooterContent = {
  declaration: "© {{year}} Zhenshuo Zhao",
  contact: [
    { icon: FaEnvelope, href: "mailto:vincentjill@hotmail.com" },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/zhenshuo-vincent-zhao/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
};

export const footerContext: React.Context<FooterContent> =
  createContext<FooterContent>(footerContent);

export const useFooterContext = () => useContext<FooterContent>(footerContext);
