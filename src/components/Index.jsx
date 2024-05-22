/* eslint-disable jsx-a11y/alt-text */
import "./manage.css";
const Index = () => {
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-[#FFA62F] flex flex-col justify-center items-center">
        <div className="textSection flex flex-col justify-center items-center">
          <p className="text-3xl lg:text-7xl p-3 text-white font-bold">
            Welcome,to Utility Area
          </p>
          <p className="text-xl text-white">
            (The ultimate place for all your utility needs)
          </p>
        </div>

        <div className="cardHolder mt-5 h-[40vmin] bg-gray-200 flex flex-col justify-center items-center">
          <div className="card h-[30vmin] w-[40vmin] ">
            <div className="h-[25vmin] w-[40vmin] flex flex-col justify-center items-center  ">
              <img
                src="https://codemap.co.in/media/Android.png"
                className="max-w-full max-h-full object-contain"
              ></img>
            </div>
          </div>
          <button className="bg-[#0d47a1] p-2 text-white">
            <a href="/MoMForm">MoM Form</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Index;
