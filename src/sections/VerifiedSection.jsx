import { AssuredWorkload, CreditScore, Task } from "@mui/icons-material";

const VerifiedSection = () => {
  return (
    <div
      className="w-full bg-white px-8 md:px-20 lg:px-40 py-20 flex flex-col items-center justify-center gap-y-12"
      id="service"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Sertifikasi Kami Lengkap Lo!
        </h2>
        <hr className="w-1/3 h-2 bg-tertiary rounded-xl mt-2 md:mt-4" />
      </div>
      <p className="text-lg text-center text-primary">
        Sertifikasi bukan hanya sebagai tanda kelengkapan berkendara, tapi juga
        membuktikan bahwa kami adalah travel yang amanah dan terpercaya. Kami
        akan selalu menjaga integritas tersebut selamanya, dengan itu Anda bisa
        mempercayakan setiap perjalanan Anda kepada Kami!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/30 rounded-full flex items-center justify-center">
            <Task fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-sm font-bold text-white">
            Terverfikasi
          </h4>
          <p className="text-md text-white">Sertifikat Layak Jalan</p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/30 rounded-full flex items-center justify-center">
            <CreditScore fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-sm font-bold text-white">Memiliki</h4>
          <p className="text-md text-white">KPS Kendaraan</p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/30 rounded-full flex items-center justify-center">
            <AssuredWorkload fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-sm font-bold text-white">
            Terverfikasi
          </h4>
          <p className="text-md text-white">Dinas Perhubungan</p>
        </div>
      </div>
    </div>
  );
};

export default VerifiedSection;
