const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen bg-white px-80 pt-28 gap-y-12">
      <div>
        <h1 className="font-bold text-5xl text-center">
          Sewa Bus dan Travel Terpercaya
        </h1>
        <h2 className="font-bold text-4xl text-center">
          Murah juga Berkualitas
        </h2>
      </div>
      <div className="h-[480px] w-11/12 bg-white rounded-t-xl border-4 border-b-0 border-gray-300 flex flex-col items-center justify-start">
        <div className="h-12 w-full rounded-t-xl border-b-4 border-gray-300  flex flex-row justify-between items-center px-8">
          <div className="text-black">Road To Bali</div>
          <div className="flex flex-row gap-x-0">
            <a
              href=""
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-regular text-xl"
            >
              &lt;
            </a>
            <a
              href=""
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center font-regular text-xl"
            >
              &gt;
            </a>
          </div>
        </div>
        <div className="h-full w-full bg-gray-800"></div>
      </div>
    </div>
  );
};

export default HeroSection;
