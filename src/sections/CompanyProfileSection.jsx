import {
  Business,
  DirectionsBusFilled,
  RouteRounded,
} from "@mui/icons-material";

const CompanyProfileSection = () => {
  const missionList = [
    "Menyediakan layanan transportasi yang aman dan nyaman dengan armada bus berfasilitas modern.",
    "Menjamin kepuasan pelanggan melalui kursi ergonomis dan sistem hiburan terbaru.",
    "Mengutamakan profesionalisme kru dalam memberikan pelayanan yang ramah dan berkualitas.",
    "Meningkatkan standar keselamatan dan kenyamanan dalam setiap perjalanan.",
    "Terus berinovasi dalam layanan transportasi untuk memenuhi kebutuhan pelanggan.",
  ];
  return (
    <div
      className="w-full bg-primary/10 px-8 md:px-20 lg:px-40 py-20 flex flex-col items-center justify-center gap-y-12"
      id="company-profile"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Profil Perusahaan
        </h2>
        <hr className="w-1/3 h-2 bg-tertiary rounded-xl mt-2 md:mt-4" />
      </div>
      <p className="text-lg text-center text-primary">
        Verena Transgold memberikan kenyamanan dan keamanan dengan layanan bus
        kami yang dilengkapi dengan fasilitas modern, kursi yang ergonomis, dan
        sistem hiburan terbaru. Dengan pelayanan ramah dari kru profesional,
        kami akan memastikan pengalaman perjalanan Anda menjadi lebih nyaman dan
        aman.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full ">
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
            <DirectionsBusFilled fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-xl font-bold text-white">4</h4>
          <p className="text-md text-white">Armada</p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
            <RouteRounded fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-xl font-bold text-white">1000+</h4>
          <p className="text-md text-white">Rute Perjalanan</p>
        </div>
        <div className=" flex flex-col items-center justify-center p-4 rounded-lg bg-primary shadow-2xl">
          <div className="h-12 w-12 bg-white/50 rounded-full flex items-center justify-center">
            <Business fontSize="large" htmlColor="#FFFFFF" />
          </div>
          <h4 className="mb-0 mt-4 text-xl font-bold text-white">1</h4>
          <p className="text-md text-white">Kantor</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">
          Visi & Misi
        </h2>
        <hr className="w-1/3 h-2 bg-tertiary rounded-xl mt-2 md:mt-4" />
      </div>
      <div className="md:w-full flex flex-col justify-center items-start gap-y-4">
        <div className="w-full flex flex-col items-center p-4 rounded-lg bg-primary/20 border-2 border-primary shadow-2xl">
          <h4 className=" text-2xl md:text-4xl font-bold text-primary text-center">
            Visi
          </h4>
          <p className="text-md text-primary mt-2 text-center">
            Menjadi penyedia layanan transportasi terbaik yang mengutamakan
            kenyamanan, keamanan, dan kepuasan pelanggan dengan fasilitas modern
            dan pelayanan profesional.
          </p>
        </div>
        <div className="w-full flex flex-col items-start p-4 rounded-lg bg-primary/20 border-2 border-primary shadow-2xl">
          <h4 className="w-full text-2xl md:text-4xl font-bold text-primary text-center">
            Misi
          </h4>
          <ol>
            {missionList.map((data, index) => {
              return (
                <li key={index}>
                  <div className="flex flex-row text-md text-primary mt-2">
                    <span className="mr-2">{++index}. </span>
                    <span className="text-justify">{data}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileSection;
