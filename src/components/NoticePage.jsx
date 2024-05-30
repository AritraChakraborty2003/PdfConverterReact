/* eslint-disable no-const-assign */
import moment from "moment";
import jsPDF from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import HiringDocEmployee from "./HiringDocEmployee";
import PartTime from "./PartTime";

const NoticePage = () => {
  const [subject, setsubject] = useState("");
  const [notice, setNotice] = useState("");
  const getPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF("p", "px", [480, 480]);
    doc.setFont("sans", "bold");
    doc.setFontSize(40);
    doc.text("Venture Linked", 127, 27);
    doc.setFont("sans", "normal");
    doc.setFontSize(12);
    doc.text("( Connecting startups revolutionizing technologies )", 130, 39);
    doc.setLineWidth(1);

    doc.line(47, 45, 425, 45);

    doc.setFontSize(10);
    doc.text(
      "Phone no: 7585824862 || email: aritra.chakraborty@gmail.com || address: IIMT-LBF Incubation Center,Greater Noida,UP",
      50,
      55
    );
    doc.setFont("sans", "bold");
    doc.setFontSize(13);
    doc.text("Notice no: N2401", 37, 95);
    doc.setFont("sans", "bold");
    doc.setFontSize(31);
    doc.text("NOTICE", 170, 120);
    doc.setFont("sans", "normal");
    doc.setFontSize(12);
    doc.text(`Subject: ${subject}`, 35, 142);
    doc.text("Dear Members,", 35, 164);
    let pos = 183;
    let arr = notice.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i += 116) {
      doc.text(`${arr.slice(i, i + 116).join("")}`, 35, pos);
      pos += 14;
    }
    /*
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      192
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      206
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      220
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      234
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      248
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      262
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      276
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting this evening",
      40,
      290
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting this evening",
      40,
      304
    );
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting this evening",
      40,
      318
    );
    */
    doc.setFont("sans", "normal");
    doc.setFontSize(10);

    doc.text("Mr. X", 40, 430);

    doc.text("Mr. Abhishek Kr. Pandey", 200, 430);

    doc.text("Mr. Aritra Chakraborty", 360, 430);

    doc.text("(Managing Partner)", 40, 440);

    doc.text("(Management Head)", 200, 440);

    doc.text("(Technical Head)", 360, 440);
    doc.save("report.pdf");
  };
  return (
    <>
      <Header />
      <div className="bg-[#FFA62F] ">
        <div className="main pb-4 pt-3 h-[calc(100vh-15vmin)] lg:h-[calc(100vh-10vmin)]  w-[100vw] bg-[#FFA62F] flex justify-center items-center">
          <form>
            <div className="mt-10 lg:mt-5 formArea bg-white w-[95vw] lg:w-[50vw]  lg:p-2   flex  justify-center items-center flex-wrap">
              <div className="header">
                <p className="text-[4vmin] font-bold  mt-2">
                  Please fill the details for notice
                </p>
              </div>
              <div className="mt-7 left pb-1 w-[97vw]  lg:w-[50vw] ">
                <ul className="flex gap-y-4 flex-col ml-5">
                  <li>
                    <input
                      type="text"
                      className="w-11/12 bg-slate-200 p-2"
                      placeholder="Enter subject of notice..."
                      onChange={(e) => setsubject(e.target.value)}
                    ></input>
                  </li>
                  <li>
                    {" "}
                    <textarea
                      className="w-11/12 bg-slate-200 p-2 "
                      placeholder="Set Notice body..."
                      rows="5"
                      onChange={(e) => {
                        setNotice(e.target.value);
                      }}
                    ></textarea>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center mt-2">
                <button onClick={getPDF} className="bg-black text-white p-2">
                  Get Pdf
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default NoticePage;
