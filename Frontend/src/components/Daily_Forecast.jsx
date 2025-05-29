import Lottie from "lottie-react";
import sunAnimation from "../animation/sun.json";
import cloudyAnimation from "../animation/cloudy.json";
import rainyAnimation from "../animation/rainy.json";
import thunderStormAnimation from "../animation/thunder.json";

function Daily_Forecast() {
  const weatherInfo = [
    { Day: "Monday", image: sunAnimation, text: "Sunny", temp: "36/22" },
    { Day: "Tuesday", image: sunAnimation, text: "Sunny", temp: "37/22" },
    { Day: "Wednesday", image: sunAnimation, text: "Sunny", temp: "37/21" },
    { Day: "Thursday", image: cloudyAnimation, text: "Cloudy", temp: "37/21" },
    { Day: "Thursday", image: cloudyAnimation, text: "Cloudy", temp: "37/21" },
    { Day: "Friday", image: cloudyAnimation, text: "Cloudy", temp: "37/21" },
    { Day: "Saturday", image: rainyAnimation, text: "Rainy", temp: "37/21" },
    { Day: "Sunday", image: thunderStormAnimation, text: "Storm", temp: "37/21" },
  ];

  return (
    <div className="bg-[#202B3C] rounded-xl p-4 max-w-full md:w-[480px] mx-auto h-auto md:h-[665px] flex flex-col mt-5 md:mt-0">
      <h1 className="text-[#6A7583] font-semibold mb-2 text-center md:text-left h-[20px] flex items-center">
        7-DAY FORECAST
      </h1>

      <div className="flex-1 "> 
        <div className="space-y-1.5 h-full">
          {weatherInfo.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#2A3A4B] w-full px-4 rounded-lg text-white h-[70px]"
            >
              <h1 className="w-[80px] text-sm font-semibold truncate">{item.Day}</h1>
              <Lottie
                animationData={item.image}
                loop
                className="h-[50px] w-[50px]"
              />
              <h6 className="w-[60px] text-sm truncate">{item.text}</h6>
              <h6 className="w-[60px] text-sm">{item.temp}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Daily_Forecast;