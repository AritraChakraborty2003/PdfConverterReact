import Header from "./Header";
import moment from "moment";
import { jsPDF } from "jspdf";
import { useState } from "react";
import { Link } from "react-router-dom";

const TechnicalDoc = () => {
  const getPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF("p", "px", [400, 400]); //Small Size for small meeting
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 21, 24);
    doc.setFont("serif", "normal");
    doc.setFontSize(11);
    doc.text("Product Id: " + `1`, 23, 36);
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 23, 48);
    doc.setFontSize(10);
    doc.text("Title: " + `MoM report Tool`, 23, 60);
    doc.text("", 20, 57);
    doc.setFontSize(10);
    doc.text("Category: " + `Technical Documentation`, 23, 72);
    doc.setLineWidth(1);

    doc.line(20, 80, 340, 80);
    doc.setFont("serif", "bold");
    doc.setFontSize(25);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("Description: ", 23, 99);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text("The MoM report Tool for business", 72, 99);
    doc.text("1. " + ``, 23, 110);
    doc.setFontSize(12);
    doc.text("2. " + ``, 23, 120);
    doc.setFontSize(12);
    doc.text("3. " + ``, 23, 130);
    doc.setFontSize(12);
    doc.text("4. " + ``, 23, 140);
    doc.setFontSize(12);
    doc.text("5. " + ``, 23, 150);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("Technologies: ", 23, 165);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      "The technologies used are as per needs and requirements of projects",
      76,
      165
    );
    doc.text("1. " + ``, 23, 175);
    doc.setFontSize(12);
    doc.text("2. " + ``, 23, 185);
    doc.setFontSize(12);
    doc.text("3. " + ``, 23, 195);
    doc.setFontSize(12);
    doc.text("4. " + ``, 23, 205);
    doc.setFontSize(12);
    doc.text("5. " + ``, 23, 215);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("Technologies: ", 23, 230);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      "The technologies used are as per needs and requirements of projects",
      76,
      230
    );
    doc.text("1. " + ``, 23, 240);
    doc.setFontSize(12);
    doc.text("2. " + ``, 23, 250);
    doc.setFontSize(12);
    doc.text("3. " + ``, 23, 260);
    doc.setFontSize(12);
    doc.text("4. " + ``, 23, 270);
    doc.setFontSize(12);
    doc.text("5. " + ``, 23, 280);

    doc.setFont("serif", "bold");
    doc.setFontSize(12);
    doc.text("APIs & its usage: ", 23, 295);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text("The description of used apis and its integrations", 91, 295);
    doc.text("1. " + ``, 23, 305);
    doc.setFontSize(12);
    doc.text("2. " + ``, 23, 315);
    doc.setFontSize(12);
    doc.text("3. " + ``, 23, 325);
    doc.setFontSize(12);
    doc.text("4. " + ``, 23, 335);
    doc.setFontSize(12);
    doc.text("5. " + ``, 23, 345);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);

    doc.text(`Aritra Chakraborty`, 23, 385);
    doc.setFontSize(10);
    doc.text(`( Technical Head )`, 23, 394);

    doc.save("report.pdf");
  };
  return (
    <>
      <Header />
      <div className="bg-[#FFA62F]  h-[calc(100vh-15vmin)] lg:h-[calc(100vh-10vmin)]">
        <button className="bg-black text-white p-2" onClick={getPDF}>
          Get PDF
        </button>
      </div>
    </>
  );
};
export default TechnicalDoc;
