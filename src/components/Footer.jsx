const Footer = () => {
  return (
    <div className="py-12 px-20 bg-gray-500 w-full gap-y-12 flex flex-col items-start justify-center">
      <div className="w-56 h-12 bg-black text-white text-center flex flex-col items-center justify-center rounded-lg">
        Logo
      </div>
      <hr className="w-full bg-gray-300" />
      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-y-8 items-start justify-between">
        <div className=" text-white">
          <h5 className="text-xl font-semibold mb-4">Tentang Kami</h5>
          <a href="#">Jl. Gunung Kidul No.87, Mojokerto, Jawa Timur</a>
          <br />
          <a href="#">Office : (0321)456789013</a>
          <br />
          <a href="#">Saeful : 098765432123</a>
        </div>
        <div className=" text-white">
          <h5 className="text-xl font-semibold mb-4">Sosial Media Kami</h5>
          <a href="#">Instagram</a>
          <br />
          <a href="#">Facebook</a>
          <br />
          <a href="#">Tiktok</a>
        </div>
        <div className=" text-white">
          <h5 className="text-xl font-semibold mb-4">Sosial Media Kami</h5>
          <a href="#">Instagram</a>
          <br />
          <a href="#">Facebook</a>
          <br />
          <a href="#">Tiktok</a>
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
