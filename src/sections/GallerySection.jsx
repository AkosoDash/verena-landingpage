const GallerySection = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-start gap-y-16 px-8 md:px-20 lg:px-40 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Galeri Verena
      </h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4">
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
        <div className="w-full h-56 md:h-80 bg-gray-500 "></div>
      </div>
    </div>
  );
};

export default GallerySection;
