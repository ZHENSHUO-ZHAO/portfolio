import { useMemo } from "react";
import CarouselContent from "./CarouselContent";
import type { LayoutData, CardItem } from "./carouselTypes";
import useMeasure from "../../hooks/measureHook";

export default function Carousel<T>({
  aspectRatio,
  CardComponent,
  contentList,
  className,
}: {
  aspectRatio: number;
  CardComponent: React.ComponentType<CardItem<T>>;
  contentList: T[];
  className?: string;
}) {
  const [ref, size] = useMeasure<HTMLDivElement>();

  // Calculate the layout information for the Carousel inside when container size changes.
  const layoutData: LayoutData<T> = useMemo(() => {
    const layoutData = {
      cardWidth: Number.NaN,
      cardHeight: Number.NaN,
      baseX: Number.NaN,
      snapSize: Number.NaN,
      contentList,
      CardComponent,
    };
    if (size.width != 0) {
      const cardWidth = size.width * 0.7;
      return {
        ...layoutData,
        cardWidth,
        cardHeight: cardWidth / aspectRatio,
        baseX: -2 * cardWidth,
        snapSize: cardWidth,
      };
    } else {
      return layoutData;
    }
  }, [CardComponent, aspectRatio, contentList, size.width]);

  return (
    <div
      className={`relative w-full mb-10 ${className}`}
      style={{ aspectRatio: aspectRatio / 0.7 }}
    >
      <div className="absolute inset-x-0">
        <div
          ref={ref}
          className="relative overflow-hidden flex flex-col justify-center items-center gap-1 w-full"
        >
          {Number.isNaN(layoutData.cardWidth) || (
            <CarouselContent layoutData={layoutData} />
          )}
        </div>
      </div>
    </div>
  );
}
