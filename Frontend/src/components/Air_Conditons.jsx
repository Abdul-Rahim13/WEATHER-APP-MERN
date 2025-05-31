import Lottie from "lottie-react";
import temperature from "../animation/temperature.json";
import wind from "../animation/wind.json";
import waterDrop from "../animation/waterDrop.json";
import UV from "../animation/UV.json";

function Air_Conditons({realFeel,wSpeed,chanceOfRain,uv}) {
  return (
    <div className="bg-[#202B3C] rounded-xl p-5 max-w-full w-full md:w-[680px] md:h-auto md:ml-10">
      <h1 className="text-[#6A7583] text-lg font-semibold mb-4">
        AIR CONDITIONS
      </h1>

      {/* Keep 2 columns on all screen sizes */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-4">
        {/* Left top */}
        <div className="flex items-center gap-4 text-white">
          <Lottie animationData={temperature} loop className="h-5 w-5" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">Real Feel</p>
            <p className="text-md font-bold">{realFeel}°</p>
          </div>
        </div>

        {/* Right top */}
        <div className="flex items-center gap-4 text-white">
          <Lottie animationData={wind} loop className="h-8 w-8" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">Wind</p>
            <p className="text-md font-bold">{wSpeed}Km/h</p>
          </div>
        </div>

        {/* Left bottom */}
        <div className="flex items-center gap-4 text-white">
          <Lottie animationData={waterDrop} loop className="h-5 w-5" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">Chance of Rain</p>
            <p className="text-md font-bold">{chanceOfRain}%</p>
          </div>
        </div>

        {/* Right bottom */}
        <div className="flex items-center gap-4 text-white">
          <Lottie animationData={UV} loop className="h-8 w-8" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">UV Index</p>
            <p className="text-md font-bold">{uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Air_Conditons;
