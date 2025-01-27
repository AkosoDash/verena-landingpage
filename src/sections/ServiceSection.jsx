import {
  Business,
  DirectionsBusFilled,
  RouteRounded,
} from "@mui/icons-material";

const ServiceSection = () => {
  return (
    <div
      className="w-full bg-primary/10 px-8 md:px-20 lg:px-40 py-20 flex flex-col items-center justify-center gap-y-12"
      id="service"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-primary underline">
        Ingin Tahu Lebih?
      </h2>
      <p className="text-lg text-center text-primary">
        Kami memberikan kenyamanan dan keamanan dengan layanan bus kami yang
        dilengkapi dengan fasilitas modern, kursi yang ergonomis, dan sistem
        hiburan terbaru. Dengan pelayanan ramah dari kru profesional, kami akan
        memastikan pengalaman perjalanan Anda menjadi lebih nyaman dan aman.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
            <DirectionsBusFilled fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-xl font-bold text-white">4</h4>
          <p className="text-md text-white">Armada</p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
            <RouteRounded fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-xl font-bold text-white">1000+</h4>
          <p className="text-md text-white">Rute Perjalanan</p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
            <Business fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-xl font-bold text-white">1</h4>
          <p className="text-md text-white">Kantor</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
