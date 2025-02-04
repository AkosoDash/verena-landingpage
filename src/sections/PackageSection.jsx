import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import packageData from "../datas/packageData.json";
import { Widgets } from "@mui/icons-material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
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
const PackageSection = () => {
  return (
    <div
      className="w-full min-h-screen bg-primary/10 flex flex-col items-center justify-start gap-y-8 px-8 md:px-20 lg:px-40 py-12"
      id="package"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Apa Saja Paketnya?
        </h2>
        <hr className="w-1/3 h-2 bg-tertiary rounded-xl mt-2 md:mt-4" />
      </div>
      <Carousel
        className="w-full h-auto z-10"
        responsive={responsive}
        swipeable
        slidesToSlide={1}
      >
        {packageData.data.map((data, key) => (
          <div className="lg:h-[520px] h-auto w-auto mx-2 rounded-xl bg-primary flex flex-col items-center justify-between pb-5 gap-y-4">
            <div
              className="w-full sm:min-h-64 h-32 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>
            <div className="flex flex-col items-center justify-start gap-y-2">
              <div className="flex flex-row items-center justify-center gap-x-4">
                <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
                  {/* <FontAwesomeIcon icon={faBusSimple} size="xl" /> */}
                  <Widgets fontSize="medium" htmlColor="#FFFFFF" />
                </div>
                <h4 className="text-xl font-bold text-white">{data.title}</h4>
              </div>
              <p className="text-sm font-regular text-justify w-5/6 text-white">
                {data.description}
              </p>
            </div>
            <a
              href="#contact"
              className="w-11/12 sm:py-5 py-2 rounded-lg bg-tertiary text-white font-bold flex flex-row items-center justify-center"
            >
              Hubungi Kami
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PackageSection;
