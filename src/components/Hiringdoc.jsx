import jsPDF from "jspdf";

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

    doc.line(20, 22, 160, 22);
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
    doc.setFont("serif", "bold");
    doc.text(`The Responsibilites are:`, 20, 141);
    doc.setFont("serif", "normal");
    doc.text(`1. Managing day to day web development updates`, 20, 151);
    doc.text(`2. Communicating with team as per project requirement`, 20, 161);
    doc.text(`3. Working for 18 hours/week`, 20, 171);
    doc.text(
      `4. Working primarily on frontend devlopment and API integration`,
      20,
      181
    );

    doc.save("unameHiringLetter.pdf");
  };
  return (
    <button onClick={getPDF} className="bg-black p-2 text-white">
      Get Pdf
    </button>
  );
};
export default HiringDoc;
