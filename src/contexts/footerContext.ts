import { createContext, useContext } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { cv, email, linkedin } from "../utils/constants";
import { FaFileDownload } from "react-icons/fa";
import type { Contact } from "./pageContext";
import type { IconType } from "react-icons";

export type FooterContent = {
  declaration: string;
  contact: (Contact & { icon: IconType })[];
};

export const footerContent: FooterContent = {
  declaration: "© {{year}} Zhenshuo Zhao",
  contact: [
    { icon: FaEnvelope, href: email },
    {
      icon: FaLinkedin,
      href: linkedin,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    { icon: FaFileDownload, href: cv, download: true },
  ],
};

export const footerContext: React.Context<FooterContent> =
  createContext<FooterContent>(footerContent);

export const useFooterContext = () => useContext<FooterContent>(footerContext);
