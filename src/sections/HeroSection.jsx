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
      className="flex flex-col items-center justify-center w-full min-h-screen bg-cover px-4 md:px-20 xl:px-80 pt-28 gap-y-12 relative overflow-x-hidden"
      id="hero"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Carousel
          responsive={responsive}
          className="w-full h-full object-cover"
          autoPlay
          autoPlaySpeed={5000}
          infinite
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {armadas.map((data, key) => (
            <div
              className="w-full h-full flex justify-center items-center overflow-hidden"
              key={key}
            >
              <img src={data} alt="" className="w-full h-screen object-cover" />
            </div>
          ))}
        </Carousel>

        {/* Optional: Background Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <h1 className="relative z-10 font-bold text-3xl lg:text-5xl text-center text-white">
        Nikmati Wisata Tanpa Batas dengan Armada Terbaik!
      </h1>
      <a
        href="https://wa.me/6281260050010"
        target="_blank"
        rel="noreferrer"
        className="relative z-10 bg-tertiary px-8 py-4 font-semibold text-white rounded-[8px]"
      >
        Pesan Sekarang!
      </a>
    </div>
  );
};

export default HeroSection;
