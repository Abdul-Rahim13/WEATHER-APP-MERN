import Lottie from "lottie-react";
import sunnyAnimation from "../animation/sunny.json";
import cloudyAnimation from "../animation/cloudy.json";
import rainyAnimation from "../animation/rainy.json";
import thunderStormAnimation from "../animation/thunder.json";
import snowyAnimation from '../animation/snowy.json'

function CurrentTemperature({city, chanceOfRain, temperature}) {

  // Determine animation based on both temperature and chance of rain
  const getAnimationData = () => {
    if (chanceOfRain >= 70) return rainyAnimation;
    if (chanceOfRain >= 30) return cloudyAnimation;
    if (temperature > 30) return sunnyAnimation;
    if (temperature > 20) return cloudyAnimation;
    if (temperature > 10) return rainyAnimation;
    if (temperature > 0) return thunderStormAnimation;
    return snowyAnimation;
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:ml-10">
      <div className="flex flex-col justify-center w-full md:w-[350px] text-center md:text-left">
        <h1 className="text-white text-4xl font-bold">{city}</h1>
        <h6 className="text-white font-thin">chance of rain: {chanceOfRain !== undefined ? `${chanceOfRain}%` : 'N/A'}</h6>
        <h1 className="text-white text-5xl font-bold mt-8">{temperature}°</h1>
      </div>

      <div className="mt-5 md:ml-10 flex justify-center w-full md:w-auto">
        <Lottie
          animationData={getAnimationData()}
          loop={true}
          className="h-[140px] w-[200px] sm:h-[140px] sm:w-[210px] md:mt-0 mt-2"
        />
      </div>
    </div>
  );
}

export default CurrentTemperature;
