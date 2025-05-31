import Lottie from "lottie-react";
import sunAnimation from "../animation/sun.json";
import cloudyAnimation from "../animation/cloudy.json";
import partlyCloudyAnimation from "../animation/partlyCloudy.json";
import rainyAnimation from "../animation/rainy.json";
import thunderStormAnimation from "../animation/thunder.json";
import "../App.css";
import { useState } from "react";
import { useEffect } from "react";


const getAnimation = (description) => {
  const desc = description.toLowerCase();
  if (desc.includes("cloud")) return cloudyAnimation;
  if (desc.includes("partly")) return partlyCloudyAnimation;
  if (desc.includes("rain")) return rainyAnimation;
  if (desc.includes("thunder")) return thunderStormAnimation;
  if (desc.includes("sun") || desc.includes("clear")) return sunAnimation;
  return sunAnimation;
}

function Hourly_Forecast({city}) {
  const [hourly, setHourly] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/weather?address=${city}`).then((res)=>res.json()).then((data)=>{
      if(!data.error){
        setHourly(data.hourly)
      }
    }).catch((error) => {
        console.error("Error fetching weather:", error);
      })
  },[city])

  return (
    <div className=" md:ml-10 bg-[#202B3C] rounded-xl p-2 max-w-full md:w-[680px] h-auto md:h-[210px]">
      <h2 className="text-[#6A7583] text-lg font-semibold mb-2">
        TODAY FORECAST
      </h2>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide py-1">


        {
          hourly.map((item, index) => {
            const time = new Date(item.timestamp_local).toLocaleTimeString([],{
              hour: '2-digit',
              minute: '2-digit'
            })
            const temp = Math.round(item.temp)
            const animation = getAnimation(item.weather.description)

          return (
          <div
            key={index}
            className="bg-[#2A3A4B] min-w-[90px] md:min-w-[100px] p-3 rounded-lg flex flex-col items-center text-white"
          >
            <span className="text-sm mb-1 text-[#6A7583] font-semibold text-center">
              {time}
            </span>
            <Lottie
              animationData={animation}
              loop
              className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
            />
            <span className="text-lg mt-2 font-bold">{temp}°</span>
          </div>
          )
          })
      }
      </div>
    </div>
  );
}

export default Hourly_Forecast;
