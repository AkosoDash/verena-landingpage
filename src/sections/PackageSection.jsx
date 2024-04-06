const PackageSection = () => {
  return (
    <div className="w-full min-h-screen bg-gray-300 flex flex-col items-center justify-start gap-y-20 px-8 md:px-20 lg:px-40 py-12">
      <h1 className="text-3xl md:text-5xl font-bold">Paket Verena</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-start gap-4">
        <div className="h-[480px] rounded-xl bg-white flex flex-col items-center justify-start gap-y-4 pb-5">
          <div className="w-full h-64 rounded-xl bg-gray-500"></div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
            <h4 className="text-xl font-bold text-gray-500">Executive</h4>
          </div>
          <p className="text-md font-regular text-center w-5/6 text-gray-700">
            Dapatkan pelayanan ekstra dari kami berupa makanan ringan , selimut,
            kursi ergonomis, wifi, Air Conditioner, juga toilet dalam bus
          </p>
          <a
            href=""
            className="w-11/12 py-5 rounded-lg bg-gray-300 text-black font-bold flex flex-row items-center justify-center"
          >
            Hubungi Kami
          </a>
        </div>
        <div className="h-[480px] rounded-xl bg-white flex flex-col items-center justify-start gap-y-4 pb-5">
          <div className="w-full h-64 rounded-xl bg-gray-500"></div>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <div className="h-12 w-12 bg-gray-500 rounded-full"></div>
            <h4 className="text-xl font-bold text-gray-500">Executive</h4>
          </div>
          <p className="text-md font-regular text-center w-5/6 text-gray-700">
            Dapatkan pelayanan ekstra dari kami berupa makanan ringan , selimut,
            kursi ergonomis, wifi, Air Conditioner, juga toilet dalam bus
          </p>
          <a
            href=""
            className="w-11/12 py-5 rounded-lg bg-gray-300 text-black font-bold flex flex-row items-center justify-center"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageSection;
