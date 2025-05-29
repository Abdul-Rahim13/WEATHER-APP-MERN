import Lottie from "lottie-react";
import sunAnimation from "../animation/sun.json";
import cloudyAnimation from "../animation/cloudy.json";
import partlyCloudyAnimation from "../animation/partlyCloudy.json";
import rainyAnimation from "../animation/rainy.json";
import thunderStormAnimation from "../animation/thunder.json";
import "../App.css";

function Hourly_Forecast() {
  const weatherAnimation = [
    {
      title: "TODAY FORECAST",
    },
    {
      time: "6:00 AM",
      image: cloudyAnimation,
      temperature: "25°",
    },
    {
      time: "7:00 AM",
      image: partlyCloudyAnimation,
      temperature: "28°",
    },
    {
      time: "8:00 AM",
      image: thunderStormAnimation,
      temperature: "20°",
    },
    {
      time: "9:00 AM",
      image: sunAnimation,
      temperature: "34°",
    },
    {
      time: "10:00 AM",
      image: sunAnimation,
      temperature: "32°",
    },
    {
      time: "11:00 AM",
      image: cloudyAnimation,
      temperature: "30°",
    },
    {
      time: "11:00 AM",
      image: rainyAnimation,
      temperature: "30°",
    },
    {
      time: "11:00 AM",
      image: rainyAnimation,
      temperature: "30°",
    },
  ];

  return (
    <div className=" md:ml-10 bg-[#202B3C] rounded-xl p-2 max-w-full md:w-[680px] h-auto md:h-[210px]">
      <h2 className="text-[#6A7583] text-lg font-semibold mb-2">
        {weatherAnimation[0].title}
      </h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide py-1">
        {weatherAnimation.slice(1).map((item, index) => (
          <div
            key={index}
            className="bg-[#2A3A4B] min-w-[90px] md:min-w-[100px] p-3 rounded-lg flex flex-col items-center text-white"
          >
            <span className="text-sm mb-1 text-[#6A7583] font-semibold text-center">
              {item.time}
            </span>
            <Lottie
              animationData={item.image}
              loop
              className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
            />
            <span className="text-lg mt-2 font-bold">{item.temperature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hourly_Forecast;
