import moment from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
const TerminatePage = () => {
  const getPDF = (e) => {
    e.preventDefault();
    const doc = new jsPDF("p", "px", [400, 400]); //Small Size for small meeting
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 21, 24);
    doc.setFont("serif", "normal");
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 23, 36);
    doc.setFontSize(10);
    doc.text("email: " + `${title}`, 23, 48);
    doc.text("", 20, 60);
    doc.setFontSize(10);
    doc.text("Category: " + `Technical Documentation`, 23, 72);
    doc.setLineWidth(1);

    doc.line(20, 80, 340, 80);

    doc.text(`Aritra Chakraborty`, 23, 385);
    doc.setFontSize(10);
    doc.text(`( Technical Head )`, 23, 394);

    doc.save("report.pdf");
  };
  return (
    <>
      <p>This is the termination page</p>
    </>
  );
};
export default TerminatePage;
