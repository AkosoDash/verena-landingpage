import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HeroSection = () => {
  const armadas = [
    "assets/galleries/invoker-1.jpeg",
    "assets/galleries/oracle-1.jpeg",
    "assets/galleries/lesrac-1.jpeg",
    "assets/galleries/thinker-1.jpeg",
    "assets/galleries/dazzle-1.jpeg",
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      className="flex flex-col items-center justify-end w-full min-h-screen bg-gradient-to-t from-white to-blue-200 bg-cover px-4 md:px-20 xl:px-80 pt-28 gap-y-12 relative overflow-x-hidden"
      id="hero"
    >
      <img
        className="absolute bottom-0 z-10 -left-48"
        alt="awikwok"
        src="/assets/background/1.png"
      />
      <img
        className="absolute bottom-0 z-10 -right-48 scale-x-[-1]"
        alt="awikwok"
        src="/assets/background/1.png"
      />
      <h1 className="font-bold text-3xl lg:text-5xl text-center text-primary underline">
        Travel With Passion
      </h1>
      <div className="h-auto w-11/12 border-4 border-b-0 border-primary rounded-t-xl">
        <Carousel
          responsive={responsive}
          className="h-full md:h-[480px] w-full bg-white rounded-t-lg z-20"
        >
          {armadas.map((data, key) => (
            <div
              className="h-full w-full bg-gray-800 flex justify-center items-center overflow-hidden"
              key={key}
            >
              <img
                src={data}
                alt=""
                className="max-h-full max-w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
