import { Instagram, MusicNoteRounded, WhatsApp } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="py-12 px-20 bg-primary w-full gap-y-12 flex flex-col items-start justify-center">
      <div className="w-56 h-24 bg-white text-white text-center flex flex-col items-center justify-center rounded-lg">
        <img src="/assets/logos/logo-with-text.png" alt="logo-with-text" />
      </div>
      <hr className="w-full bg-gray-300" />
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-y-8 items-start justify-between">
        <div className=" text-white">
          <h5 className="text-xl font-semibold mb-4">Alamat Kami</h5>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <p>
              Dusun Kangkungan RT.7 RW.5, Lengkong, Kec. Mojoanyar, Mojokerto,
              Jawa Timur
            </p>
          </div>
        </div>
        <div className=" text-white flex flex-col items-start justify-normal gap-y-2">
          <h5 className="text-xl font-semibold mb-2">Sosial Media Kami</h5>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <Instagram />
            <a
              href="https://www.instagram.com/verenatransgold/"
              target="_blank"
              rel="noreferrer"
            >
              @verenatransgold
            </a>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <MusicNoteRounded />
            <a
              href="https://www.tiktok.com/@verenatrans"
              target="_blank"
              rel="noreferrer"
            >
              @verenatrans
            </a>
          </div>
        </div>
        <div className=" text-white flex flex-col items-start justify-normal gap-y-2">
          <h5 className="text-xl font-semibold mb-2">Kontak Kami</h5>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <WhatsApp />
            <a
              href="https://wa.me/6281260050010"
              target="_blank"
              rel="noreferrer"
            >
              Office : 081260050010
            </a>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <WhatsApp />
            <a
              href="https://wa.me/6282257950899"
              target="_blank"
              rel="noreferrer"
            >
              Owner : 082257950899
            </a>
          </div>
        </div>
      </div>
      <hr className="w-full bg-gray-300" />
      <div className="w-full text-center text-white text-md font-semibold">
        VerenaTravel @ 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
