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

export type route = {
  path?: string;
  content: ContextPageBase;
  PageContext: React.Context<unknown>;
  PageComponent: React.ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  subroute?: subroute<any>[];
};

export type subroute<P = object> = {
  path?: string;
  component: React.ComponentType<P>;
  props?: P;
};

export type TextChunk = {
  text: string;
  style?: string;
  icon?: IconType;
};

export type HybridText = Array<TextChunk>;

export type Header = {
  tag: Tag;
  title: string;
  hybridTitle?: HybridText;
  statement: HybridText[];
};

export type Heading = {
  tag?: Tag;
  title: string;
  hybridTitle?: HybridText;
  desc?: string;
};

export type Tag = {
  icon: IconType;
  text?: string;
};

export type HybridDescription = (string | HybridText)[];

export type HybridTag = { icon: IconType; text: string | HybridText };

export type Stat = {
  icon?: IconType;
  amount: string;
  unit: string;
};

export type Image = { url: string; alt: string; title?: string; desc?: string };

export type Contact = {
  href: string;
  target?: string;
  rel?: string;
  download?: boolean;
};

export type ContactButtonInfo = { heading: Heading; contact: Contact };

export type CardColor = {
  icon: IconColor;
  bg: string;
  border: string;
  tags?: IconColor[];
  shadow?: string;
};

export type IconColor = {
  text: string;
  bg: string;
  shadow?: string;
  icon?: string;
  border?: string;
};

export type HeadingColor = { title: string; desc: string };
