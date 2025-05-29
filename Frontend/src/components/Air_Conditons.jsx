import Lottie from "lottie-react";
import temperature from "../animation/temperature.json";
import wind from "../animation/wind.json";
import waterDrop from "../animation/waterDrop.json";
import UV from "../animation/UV.json";

function Air_Conditons() {
  return (
    <div className="bg-[#202B3C] rounded-xl p-5 max-w-full md:w-[680px] md:h-[155px] md:ml-10">
      <h1 className="text-[#6A7583] text-lg font-semibold mb-2">
        AIR CONDITIONS
      </h1>

      <div className="grid grid-cols-2 gap-2">
        <div className="flex items-center gap-4 text-white">
          <Lottie animationData={temperature} loop className="h-5 w-5" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">Real Feel</p>
            <p className="text-md font-bold">30°</p>
          </div>
        </div>

        {/* First Row - Right */}
        <div className="flex items-centee gap-4 text-white ml-40">
          <Lottie animationData={wind} loop className="h-8 w-8" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">Wind</p>
            <p className="text-md font-bold">0.2 Km/h</p>
          </div>
        </div>

        {/* Second Row - Left */}
        <div className="flex items-center gap-4 text-white">
          <Lottie animationData={waterDrop} loop className="h-5 w-5" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">Chance of Rain</p>
            <p className="text-md font-bold">0%</p>
          </div>
        </div>

        {/* Second Row - Right */}
        <div className="flex items-center gap-4 text-white ml-40">
          <Lottie animationData={UV} loop className="h-8 w-8" />
          <div>
            <p className="text-sm text-[#6A7583] font-semibold">UV Index</p>
            <p className="text-md font-bold">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Air_Conditons;