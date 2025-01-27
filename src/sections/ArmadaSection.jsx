import {
  AcUnit,
  Bed,
  Chair,
  CoffeeMaker,
  Group,
  Mic,
  Tv,
} from "@mui/icons-material";
import armadaDatas from "../datas/armadaData.json";

const ArmadaSection = () => {
  const iconFacilities = [
    <AcUnit />,
    <Mic />,
    <Tv />,
    <Group />,
    <Bed />,
    <Chair />,
    <Chair />,
    <CoffeeMaker />,
  ];

  return (
    <div
      className="w-full min-h-screen bg-white flex flex-col items-center justify-start gap-y-16 px-8 md:px-20 lg:px-40 py-12"
      id="armada"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-center text-primary underline">
        ini Dia, Armada Kami!
      </h1>
      <div className="w-full flex flex-unwrap hidden-scrollbar overflow-x-scroll items-center gap-4 pb-8">
        {armadaDatas.datas.map((data, index) => (
          <div
            className="bg-white gap-y-4 flex flex-col items-center justify-center shadow-2xl pb-4 rounded-lg min-w-64"
            key={index}
          >
            <div className="relative group">
              <div className="absolute top-0 w-full h-full bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white">
                <div className="flex items-center justify-start gap-x-2 mb-4">
                  <h1 className="text-lg font-semibold">
                    Fasilitas {data.name}
                  </h1>
                </div>
                {armadaDatas.facilitiesData.map((facilitiesData, key) => (
                  <div
                    className={`${
                      data.facilitiesData[key] ? "flex" : "hidden"
                    }  items-start justify-start gap-x-2 mb-2`}
                  >
                    {iconFacilities[key]}
                    <h1>{facilitiesData.title}</h1>
                  </div>
                ))}
              </div>
              <img
                src={data?.imgSource}
                alt=""
                className="w-full h-[480px] object-cover object-center"
              />
            </div>
            <div>
              <h6 className="text-center text-lg font-semibold">{data.name}</h6>
              <p className="text-center text-lg">{data.brand}</p>
            </div>
            <a
              href="#contact"
              className="border-2 border-[#0F62FE] rounded-lg color-[#0F62FE] px-4 py-2"
            >
              Hubungi Sekarang
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArmadaSection;
