import galleriesData from "../datas/galleryData.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const GallerySection = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className="w-full min-h-screen bg-white flex flex-col items-center justify-start gap-y-0 px-4 md:px-20 lg:px-30 py-24"
      id="gallery"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Galeri Armada Kami
        </h2>
        <hr className="w-1/3 h-2 bg-tertiary rounded-xl mt-2 md:mt-4" />
      </div>
      {galleriesData.data.map((data, index) => (
        <div
          key={index}
          className="w-full flex flex-row justify-between items-center bg-white relative"
        >
          <div className="w-full h-full flex justify-center items-center text-black text-center absolute top-0 left-0 z-10">
            <span className="w-full h-36 flex items-center justify-center bg-black/25 font-bold text-white text-2xl">
              {data.title}
            </span>
          </div>
          <Carousel
            responsive={responsive}
            className="h-[400px] w-full bg-black"
            infinite
          >
            {data.images.map((image, key) => (
              <div key={key} className="flex justify-center items-center">
                <img
                  src={image}
                  alt={`${data.title}-${key}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
      ))}
      <div className="w-full flex flex-wrap items-center justify-center"></div>
    </div>
  );
};

export default GallerySection;
