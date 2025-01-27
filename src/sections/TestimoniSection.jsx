import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import testimoniData from "../datas/testimoniData.json";
import { Person } from "@mui/icons-material";
const TestimoniSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="w-full min-h-screen bg-primary/10 p-4 sm:p-20 flex flex-col items-center justify-start gap-y-16"
      id="testimoni"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-primary underline">
        Testimoni Pelanggan Kami
      </h1>
      <Carousel
        className="w-full h-auto z-10 px-4"
        responsive={responsive}
        swipeable
        infinite
        slidesToSlide={1}
        itemClass="mx-2"
      >
        {testimoniData.data.map((data, key) => (
          <div
            className="h-96 w-full bg-white gap-y-3 flex flex-col items-center justify-start rounded-xl"
            key={key}
          >
            <div
              className="w-full h-48 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${data.imageUrl})` }}
            ></div>
            <div className="flex flex-row items-center justify-center gap-x-2 px-4">
              <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
                <Person fontSize="large" htmlColor="#1450A3" />
              </div>
              <h6 className="text-center text-lg font-semibold text-primary">
                {data.name}
              </h6>
            </div>
            <h6 className="text-center text-md font-regular text-gray-500 px-4 pb-4 text-ellipsis line-clamp-3">
              {data.testimoni}
            </h6>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimoniSection;
