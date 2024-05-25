import jsPDF from "jspdf";
import moment from "moment";
const HiringDoc = () => {
  const getPDF = (e) => {
    e.preventDefault();
    const doc = jsPDF();
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 17);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.setLineWidth(1);

    doc.line(20, 22, 190, 22);
    doc.text(`Dear uname,`, 20, 29);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `We the Venture Linked Team is delighted to extend you the offer of Web Development intern in our firm, `,
      20,
      37
    );
    doc.text(
      `we are sure that you will definitely perform very well in our web Development team and help our `,
      20,
      44
    );
    doc.text(
      `startup grow.Your skills are really very impressive and the projects you developed is really very`,
      20,
      51
    );
    doc.text(
      `very competetive.The problem solving skills you have shown during the interview proccess also make`,
      20,
      58
    );
    doc.text(
      `you the best candidate for this role.The offer details of the internship is as provided below:-`,
      20,
      64
    );
    doc.text(`1. Position: Web Developer Intern`, 20, 71);
    doc.text(`2. mode: Online`, 20, 81);
    doc.text(`3. Compensation: unpaid`, 20, 91);
    doc.text(`4. Reporting To: Aritra Chakraborty,Technical Head`, 20, 101);
    doc.text(`5. Joining Date: 25th June 2024`, 20, 111);
    doc.text(`6. Timing : Flexible`, 20, 121);
    doc.text(`7. Hours Neeed : 18 hours/week(5 days Week)`, 20, 131);
    doc.text(`8. Duration : 6 months`, 20, 141);
    doc.setFont("serif", "normal");
    doc.text(
      `The main roles & responsibilites for the web development intern role are:`,
      20,
      151
    );
    doc.setFont("serif", "normal");
    doc.text(
      `1. Managing day to day web development updates as per needs of the project or feature`,
      20,
      161
    );
    doc.text(`2. Communicating with team as per project requirement`, 20, 171);
    doc.text(
      `3. Developing robust APIs and integrating its data in the frontend as per the need`,
      20,
      181
    );
    doc.text(
      `4. Working primarily on react.js for frontend devlopment and express.js,node.js and MongoDB for backend`,
      20,
      191
    );

    doc.text(
      `This internship will not only help you to boost your skills but also have a multiple benefits which are:`,
      20,
      201
    );
    doc.text(`1. Letter of recommendation`, 20, 211);
    doc.text(`2. Internship Certificate `, 20, 221);
    doc.text(`3. Flexible work Hours`, 20, 231);
    doc.text(
      `4. For full-time jobs priority will be given to top performing interns `,
      20,
      241
    );
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(`Aritra Chakraborty`, 20, 270);
    doc.text(`( Technical Head )`, 20, 277);
    doc.setFont("serif", "normal");
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 21, 285);

    doc.save("unameHiringLetter.pdf");
  };
  return (
    <button onClick={getPDF} className="bg-black p-2 text-white">
      Get Pdf
    </button>
  );
};
export default HiringDoc;
