import type { LucideProps } from "lucide-react";
import { createContext, useContext } from "react";
import type { IconType } from "react-icons";

export default function createPageContext<T extends ContextPageBase>(
  content: T,
): [React.Context<T>, () => T] {
  const PageContext = createContext<T>(content);
  const usePageContext = () => useContext<T>(PageContext);
  return [PageContext, usePageContext] as const;
}

export type ContextPageBase = { pageTitle: string };

export type DescriptiveItem = {
  title?: string;
  subtitle?: string;
  desc?: string;
  image?: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export type HybridText = Array<{ text: string; style?: string }>;

export type Header = {
  tag: Tag;
  title: string;
  statement: HybridText[];
};

export type Heading = {
  tag?: Tag;
  title: string;
  desc?: string;
};

export type Tag = {
  icon: IconType;
  text?: string;
};

export type CardColor = {
  icon: IconColor;
  bg: string;
  border: string;
  tags?: IconColor[];
};

export type IconColor = {
  text: string;
  bg: string;
  shadow?: string;
  icon?: string;
  border?: string;
};
