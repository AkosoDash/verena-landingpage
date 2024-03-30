const ContactSection = () => {
  return (
    <div className="w-full flex flex-row justify-between items-start pt-20 px-20 bg-gray-300">
      <div className="w-1/3 h-[480px] bg-gray-500 rounded-t-[24px]"></div>
      <div className="w-1/2 flex flex-col items-start justify-center gap-y-12 py-20 ">
        <h1 className="text-5xl font-bold">Jalan Jalan Murah?</h1>
        <p className="font-medium text-sm">
          Tentu bisa, kapan lagi bisa jalan-jalan dengan ongkos minim namun
          fasilitas memadai. Pesan sekarang juga melalui kontak di bawah ini!
          Buruan promo terbatas
        </p>
        <div className="flex flex-row gap-x-4">
          <a
            href="#"
            className="px-9 py-2 bg-black text-white font-semibold rounded-lg"
          >
            Telepon
          </a>
          <a
            href="#"
            className="px-9 py-2 bg-[#25D366] text-white font-semibold rounded-lg"
          >
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
