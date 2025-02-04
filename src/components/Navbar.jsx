import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  window.addEventListener("scroll", function () {
    setScrollYPosition(window.scrollY);
  });

  return (
    <>
      <div
        className={`fixed top-0 flex flex-row items-center justify-between w-full h-20 border border-b-[3px] px-8 sm:px-20 z-50 ${
          scrollYPosition < 300
            ? "bg-transparent transition-colors duration-75 border-black/0"
            : "bg-primary transition-colors duration-75 border-black/25"
        }`}
      >
        <a
          className="w-40 h-16 flex items-center justify-center rounded-lg p-2"
          href="/"
        >
          <img
            src={
              "/assets/logos/white-logo-with-text.png"
              // scrollYPosition < 300
              //   ? "/assets/logos/logo-with-text.png"
            }
            alt="logo"
          />
        </a>
        <div
          className={`hidden lg:flex flex-row justify-center items-center gap-x-8  ${
            scrollYPosition < 300 ? "text-white" : "text-white"
          }`}
        >
          <a href="#company-profile" className="font-semibold">
            Profil Perusahaan
          </a>
          <a href="#armada" className="font-semibold">
            Armada
          </a>
          <a href="#testimoni" className="font-semibold">
            Testimoni
          </a>
          <a href="#gallery" className="font-semibold">
            Galeri
          </a>
        </div>
        <a
          href="#contact"
          className="hidden lg:block bg-tertiary px-4 py-2 font-semibold text-white rounded-[8px]"
        >
          Kontak Kami
        </a>

        <button
          className="block lg:hidden font-bold text-white rounded-[8px]"
          onClick={() => setShowMobileNavbar(!showMobileNavbar)}
        >
          <FontAwesomeIcon
            icon={showMobileNavbar ? faTimes : faBars}
            size="lg"
            color={scrollYPosition < 300 ? "#000000" : "#FFFFFF"}
          />
        </button>
      </div>

      {/* Navbar Mobile */}
      <div
        className={`${
          showMobileNavbar ? "flex " : "hidden opacity-0"
        } lg:hidden flex-col justify-start items-center p-8 gap-y-4 fixed top-20 w-full h-full bg-white text-black transition-opacity duration-300 z-50`}
      >
        <a
          href="#service"
          onClick={() => setShowMobileNavbar(false)}
          className="font-semibold py-8 hover:bg-[#0F62FE]/20 hover:text-[#0F62FE]  w-full text-center rounded-lg transition duration-300"
        >
          Layanan
        </a>
        <a
          href="#armada"
          onClick={() => setShowMobileNavbar(false)}
          className="font-semibold py-8 hover:bg-[#0F62FE]/20 hover:text-[#0F62FE]  w-full text-center rounded-lg transition duration-300"
        >
          Armada
        </a>
        <a
          href="#testimoni"
          onClick={() => setShowMobileNavbar(false)}
          className="font-semibold py-8 hover:bg-[#0F62FE]/20 hover:text-[#0F62FE]  w-full text-center rounded-lg transition duration-300"
        >
          Testimoni
        </a>
        <a
          href="#gallery"
          onClick={() => setShowMobileNavbar(false)}
          className="font-semibold py-8 hover:bg-[#0F62FE]/20 hover:text-[#0F62FE]  w-full text-center rounded-lg transition duration-300"
        >
          Galeri
        </a>
        <a
          href="#contact"
          onClick={() => setShowMobileNavbar(false)}
          className=" bg-[#0F62FE] w-full text-center py-8 font-bold text-white rounded-[8px]"
        >
          Kontak Kami
        </a>
      </div>
    </>
  );
};

export default Navbar;
