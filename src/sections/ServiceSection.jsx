const ServiceSection = () => {
  return (
    <div className="w-full bg-gray-300 px-40 py-20 flex flex-col items-center justify-center gap-y-12">
      <h2 className="text-5xl font-bold">Layanan Verena</h2>
      <p className="text-sm text-center">
        Nikmati perjalanan yang nyaman dan efisien dengan layanan bus kami yang
        dilengkapi dengan fasilitas modern, kursi yang ergonomis, dan sistem
        hiburan terbaru. Dengan pelayanan ramah dari kru profesional kami, kami
        akan memastikan pengalaman perjalanan Anda menjadi lebih menyenangkan.
      </p>
      <div className="flex flex-row gap-x-6 w-full ">
        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-lg bg-white">
          <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
          <h4 className="mb-0 mt-4 text-xl font-bold">6</h4>
          <p className="text-md">Armada</p>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-lg bg-white">
          <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
          <h4 className="mb-0 mt-4 text-xl font-bold">6</h4>
          <p className="text-md">Armada</p>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-lg bg-white">
          <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
          <h4 className="mb-0 mt-4 text-xl font-bold">6</h4>
          <p className="text-md">Armada</p>
        </div>
        <div className="w-1/4 flex flex-col items-center justify-center p-4 rounded-lg bg-white">
          <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
          <h4 className="mb-0 mt-4 text-xl font-bold">6</h4>
          <p className="text-md">Armada</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
