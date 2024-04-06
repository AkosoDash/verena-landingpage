import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  return (
    <div className="fixed top-0 flex flex-row items-center justify-between w-full h-20 border border-b-[3px] bg-white border-black/25 px-20">
      <a
        className="w-56 h-12 bg-black text-white text-center flex items-center justify-center rounded-lg"
        href="#"
      >
        Logo
      </a>
      <div className="hidden lg:flex flex-row justify-center items-center gap-x-8">
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
        className="hidden lg:block bg-[#0F62FE] px-8 py-4 font-bold text-white rounded-[8px]"
      >
        Kontak Kami
      </a>
      <button
        className="block lg:hidden bg-[#0F62FE] px-8 py-4 font-bold text-white rounded-[8px]"
        onClick={() => {
          setShowMobileNavbar(!showMobileNavbar);
        }}
      >
        <FontAwesomeIcon size="1x" color="#ffffff" icon={"list"} />
      </button>
    </div>
  );
};

export default Navbar;
