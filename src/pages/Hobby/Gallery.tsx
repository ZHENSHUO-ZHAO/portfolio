import Carousel from "../../components/carousel/Carousel";
import type { CardItem } from "../../components/carousel/carouselTypes";
import ImageSlide from "../../components/page/ImageSlide";
import type { CarouselData, Image } from "../../contexts/pageContext";

export default function Gallery({ data }: { data: CarouselData }) {
  return (
    <Carousel
      aspectRatio={data.aspectRatio}
      CardComponent={Screenshot}
      contentList={data.images}
    />
  );
}

function Screenshot({ content }: CardItem<Image>) {
  return (
    <ImageSlide data={content}>
      <div className="absolute inset-x-0 bottom-0 h-fit px-3 py-px md:py-1">
        <div className="absolute inset-0 bg-slate-300/10 backdrop-blur-xs" />
        <p className="relative text-white text-xs md:text-sm">
          {content.title}
        </p>
      </div>
    </ImageSlide>
  );
}
