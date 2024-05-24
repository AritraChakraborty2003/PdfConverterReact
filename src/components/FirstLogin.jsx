import Header from "./Header";

const FirstLogin = () => {
  const myStyle = {
    background: "orange",
    font: "poppins",
    display: "flex",
  };
  return (
    <>
      <Header />
      <div
        className="h-[calc(100vh-10vmin)] justify-center items-center"
        style={myStyle}
      >
        <div className="formBody bg-white pb-3 lg:h-[40vmin] lg:w-[60vmin]">
          <div className="headerText w-full bg-black text-white p-1 lg:h-[10vmin] flex flex-col justify-content pl-2 ">
            <p className="text-xl mt-2 overflow-y-hidden">Login Form</p>
            <p className="text-md">(Login into utility dashboard)</p>
          </div>

          <form className="flex flex-col justify-center items-center p-10 gap-y-4">
            <input
              type="text"
              className="w-11/12 ml-2 bg-slate-200 p-2"
              placeholder="Enter username...."
            ></input>
            <input
              type="text"
              className="w-11/12 ml-2 bg-slate-200 p-2"
              placeholder="Enter password...."
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};
export default FirstLogin;
