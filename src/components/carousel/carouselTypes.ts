import type { MotionValue } from "motion";

export type LayoutData<T> = {
  cardWidth: number;
  cardHeight: number;
  baseX: number;
  snapSize: number;
  contentList: T[];
  CardComponent: React.ComponentType<CardItem<T>>;
};

export type CardData = {
  card: HTMLLIElement | null;
  offset: number;
  index: number;
};

export type CardItem<T> = {
  content: T;
};

export type CardProp = {
  dragX: MotionValue<number>;
  data: CardData;
};

export type DotProp = {
  index: number;
  onScroll: (index: number) => void;
  viewContentIndex: number;
};

export type OnNextCb = { (toRight: boolean): void };

export type NextButtonProp = { isToRight: boolean; onNext: OnNextCb };
