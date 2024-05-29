import moment from "moment";
import jsPDF from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import HiringDocEmployee from "./HiringDocEmployee";
import PartTime from "./PartTime";

const NoticePage = () => {
  const getPDF = () => {
    const doc = new jsPDF("p", "px", [450, 450]);
    doc.setFont("sans", "bold");
    doc.setFontSize(40);
    doc.text("Venture Linked", 127, 27);
    doc.setFont("sans", "normal");
    doc.setFontSize(12);
    doc.text("( Connecting startups revolutionizing technologies )", 130, 39);
    doc.setLineWidth(1);

    doc.line(50, 45, 400, 45);

    doc.setFontSize(10);
    doc.text(
      "Phone no: 7585824862 || email: aritra.chakraborty@gmail.com || address: IIMT-LBF Incubation Center,Greater Noida,UP",
      40,
      55
    );
    doc.setFont("sans", "bold");
    doc.setFontSize(13);
    doc.text("Notice no: N2401", 37, 95);
    doc.setFont("sans", "bold");
    doc.setFontSize(31);
    doc.text("NOTICE", 169, 120);
    doc.setFont("sans", "normal");
    doc.setFontSize(12);
    doc.text(
      "Subject: An example of subject of notice in 20 words which is to be given in every notice of meeting",
      35,
      142
    );
    doc.text("Dear Members,", 40, 164);
    doc.text(
      "An example of subject of notice in 20 words which is to be given in every notice of meeting",
      40,
      178
    );
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
      <p>This is notice page</p>
      <button onClick={getPDF} className="bg-black text-white">
        Get Pdf
      </button>
    </>
  );
};
export default NoticePage;
