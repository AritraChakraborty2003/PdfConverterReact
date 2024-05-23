/* eslint-disable jsx-a11y/alt-text */
import "./manage.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://codemap.co.in/ImagesAPI.php")
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div className="w-[100vw] p-2 bg-[#FFA62F] flex flex-col justify-center items-center">
      <div className="textSection flex flex-col justify-center items-center">
        <p className="text-3xl lg:text-7xl p-3 text-white font-bold">
          Welcome,to Utility Area
        </p>
        <p className="text-xl text-white">
          (The ultimate place for all your utility needs)
        </p>
      </div>
      <div className="cardMain flex justify-center items-center lg:gap-x-4 gap-y-3 lg:gap-y-0 flex-wrap ">
        {data.map((val) => (
          <>
            <div className="cardHolder mt-5 p-4  w-[50vmin] bg-[#ffffff] shadow-2xl flex flex-col justify-center items-center">
              <div className="card h-[25vmin] w-[40vmin] ">
                <div className="h-[21vmin] w-[40vmin] flex flex-col justify-center items-center  ">
                  <img
                    src={val.Image}
                    className="max-w-full max-h-full object-contain"
                  ></img>
                </div>
              </div>
              <p className="text-xl font-bold font-sans pl-2 pr-2 text-black">
                Category : {val.name}
              </p>
              <button className="bg-[#FFBF00] p-2 font-medium text-black mt-4 font-sans">
                <a href="/MoMForm">{val.name}</a>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Index;
