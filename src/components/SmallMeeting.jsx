/* eslint-disable no-unused-vars */
import moment from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
const SmallMeeting = () => {
  var meetNo = "MS2402";
  var title = "Development of Business Plan";
  var category = "Business Category";
  const getPDF = () => {
    const doc = new jsPDF("p", "px", [400, 400]); //Small Size for small meeting
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 24);
    doc.setFont("serif", "normal");
    doc.setFontSize(11);
    doc.text("Minutes of meeting for - Meeting no: " + `${meetNo}`, 21, 34);
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 21, 46);
    doc.setFontSize(10);
    doc.text("Title: " + `${title}`, 21, 58);
    doc.text("", 20, 57);
    doc.setFontSize(10);
    doc.text("Category: " + `${category}`, 21, 70);
    doc.setLineWidth(1);

    doc.line(20, 76, 270, 76);

    doc.setFontSize(25);
    doc.setFont("serif", "bold");
    doc.text("Agenda: ", 20, 95);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text("1. " + `Work Plans and updates as till current date`, 20, 111);
    doc.setFontSize(12);
    doc.text(
      "2. " + `Poitive and negative points of current development`,
      20,
      127
    );
    doc.setFontSize(12);
    doc.text("3. " + `Future updates and plans needed for growth`, 20, 143);
    doc.setFont("serif", "bold");
    doc.setFontSize(15);
    doc.text(`Work Plans and updates as till current date`, 20, 158);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `1. The plan to implement startup and VC room page with chat and video call feature`,
      20,
      172
    );
    doc.text(
      `2. Development done for UI and frontend of VC room page and startup page`,
      20,
      186
    );
    doc.text(
      `3. Work on UIs for news portal section and mentorship page`,
      20,
      200
    );
    doc.setFont("serif", "bold");
    doc.setFontSize(15);
    doc.text(`Work Plans and updates as of current date`, 20, 215);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `1. The plan to implement startup and VC room page with chat and video call feature`,
      20,
      229
    );
    doc.text(
      `2. Development done for UI and frontend of VC room page and startup page`,
      20,
      243
    );
    doc.text(
      `3. Work on UIs for news portal section and mentorship page`,
      20,
      257
    );
    doc.setFontSize(15);
    doc.setFont("serif", "bold");
    doc.text(`Work Plans and updates as of current date`, 20, 272);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `1. The plan to implement startup and VC room page with chat and video call feature`,
      20,
      286
    );
    doc.text(
      `2. Development done for UI and frontend of VC room page and startup page`,
      20,
      300
    );
    doc.text(
      `3. Work on UIs for news portal section and mentorship page`,
      20,
      314
    );
    doc.text(`Aritra Chakraborty`, 20, 374);
    doc.setFontSize(10);
    doc.text(`( Technical Head )`, 20, 381);
    doc.setFont("serif", "normal");
    doc.setFontSize(9.5);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 20, 388);
    doc.save("SmallMeet.pdf");
  };
  return (
    <>
      <p>The coolest meeting</p>
      <button className="bg-black text-white text-lg p-2" onClick={getPDF}>
        Get Pdf
      </button>
    </>
  );
};
export default SmallMeeting;
