import type { CardItem } from "../../components/carousel/carouselTypes";
import type { Image } from "../../contexts/pageContext";
import ImageSlide from "../../components/page/ImageSlide";

export default function Screenshot({ content }: CardItem<Image>) {
  return <ImageSlide data={content} />;
}
