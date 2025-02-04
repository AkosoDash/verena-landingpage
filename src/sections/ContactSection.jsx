import { WhatsApp } from "@mui/icons-material";

const ContactSection = () => {
  return (
    <div
      className="w-full flex lg:flex-row flex-col-reverse justify-between items-start px-8 md:px-20 lg:px-40 pt-12 bg-primary/10"
      id="contact"
    >
      <div className="lg:w-1/3 w-full h-[480px] bg-gray-500 rounded-t-[24px]">
        <img
          src={"/assets/armadas/armada-1.jpeg"}
          alt=""
          className="object-cover max-h-full w-full object-bottom rounded-t-[24px]"
        />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col items-start justify-center gap-y-4 md:gap-y-12 py-20">
        <div className="flex flex-col items-start justify-start">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            Jalan Jalan Murah?
          </h2>
          <hr className="w-1/2 h-2 bg-tertiary rounded-xl mt-2 md:mt-4" />
        </div>
        <p className="font-medium text-sm">
          Tentu bisa, kapan lagi bisa jalan-jalan dengan ongkos minim namun
          fasilitas memadai. Pesan sekarang juga melalui kontak di bawah ini!
          Buruan promo terbatas
        </p>
        <div className="w-full flex flex-col sm:flex-row gap-2">
          <a
            href="https://wa.me/6281260050010"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-2 bg-primary text-white font-semibold rounded-lg flex items-center justify-center sm:justify-start gap-x-1"
          >
            <WhatsApp fontSize="small" />
            <p>Office Whatsapp</p>
          </a>
          <a
            href="https://wa.me/6282257950899"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-2 bg-secondary text-white font-semibold rounded-lg flex items-center justify-center sm:justify-start gap-x-1"
          >
            <WhatsApp fontSize="small" />
            <p>Owner Whatsapp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
