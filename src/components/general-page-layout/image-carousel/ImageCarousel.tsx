// Library Imports
import { useMemo } from "react";

// CSS
import "./dependents/css/image-carousel.scss";

type CarouselImage = {
  alt: string;
  src: string;
};

interface ImageCarouselProps {
  imgs: CarouselImage[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imgs }) => {
  const imageArray = useMemo(
    () => [...imgs, ...imgs, ...imgs, ...imgs],
    [imgs]
  );

  return (
    <div className="image-carousel-wrapper">
      <div className="carousel-fader position-absolute z-index-1"></div>
      <div className="image-carousel-container">
        {imageArray.map((image, index) => (
          <img key={index} alt={image.alt} src={image.src} />
        ))}
      </div>
      <div className="carousel-fader position-absolute z-index-1"></div>
    </div>
  );
};

export default ImageCarousel;
