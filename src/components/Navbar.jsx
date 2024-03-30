const Navbar = () => {
  return (
    <div className="fixed top-0 flex flex-row items-center justify-between w-full h-20 border border-b-[3px] bg-white border-black/25 px-20">
      <div className="w-56 h-12 bg-black text-white text-center flex items-center justify-center rounded-lg">
        Logo
      </div>
      <div className="flex flex-row justify-center items-center gap-x-8">
        <a href="#" className="text-gray-800 font-semibold">
          Layanan
        </a>
        <a href="#" className="text-gray-800 font-semibold">
          Armada
        </a>
        <a href="#" className="text-gray-800 font-semibold">
          Testimoni
        </a>
        <a href="#" className="text-gray-800 font-semibold">
          Galeri
        </a>
      </div>
      <a
        href="#"
        className="bg-[#0F62FE] px-8 py-4 font-bold text-white rounded-[8px]"
      >
        Kontak Kami
      </a>
    </div>
  );
};

export default Navbar;
