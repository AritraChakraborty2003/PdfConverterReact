/* eslint-disable no-useless-concat */
import moment from "moment";
import { jsPDF } from "jspdf";
const MoMForm = () => {
  const getPDF = () => {
    const doc = new jsPDF();
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 11);
    doc.setFont("serif", "normal");
    doc.setFontSize(11);
    doc.text("Minutes of meeting for - Meeting no: " + `${"M101"}`, 21, 17);
    doc.setFontSize(10);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 21, 23);
    doc.setFontSize(10);
    doc.text("Title: " + `The role of AI in startup`, 21, 30);
    doc.text("", 20, 57);
    doc.setFontSize(10);
    doc.text("Category: " + `Business Strategy`, 21, 36);
    doc.setLineWidth(1);

    doc.line(20, 40, 200, 40);

    doc.setFontSize(20);
    doc.setFont("serif", "bold");
    doc.text("Agenda: ", 20, 47);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text("1. " + `How to implement the backend of AI?`, 20, 53);
    doc.setFontSize(12);
    doc.text(
      "2. " + `Where to host and what is its deployment strategy?`,
      20,
      60
    );
    doc.setFontSize(12);
    doc.text("3. " + `How to get the data for the ML Model?`, 20, 67);
    doc.setFontSize(12);
    doc.text(
      "4. " + `What is the calculation and process strategy of ML model data?`,
      20,
      74
    );
    doc.setFontSize(12);
    doc.text("5. " + `Need of AI in our application?`, 20, 81);

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`How to implement the backend of AI?`, 20, 88);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `The backend of our AI for our web app and project will be hosted on Heroku and its API will be used.`,
      20,
      95
    );
    doc.text(
      `1. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      102
    );
    doc.text(
      `2. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      109
    );
    doc.text(
      `3. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      116
    );
    doc.text(
      `4. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      123
    );
    doc.text(
      `5. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      130
    );

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`How to implement the backend of AI?`, 20, 137);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `The backend of our AI for our web app and project will be hosted on Heroku and its API will be used.`,
      20,
      143
    );
    doc.text(
      `1. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      150
    );
    doc.text(
      `2. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      157
    );
    doc.text(
      `3. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      163
    );
    doc.text(
      `4. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      170
    );
    doc.text(
      `5. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      177
    );

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`How to implement the backend of AI?`, 20, 183);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `The backend of our AI for our web app and project will be hosted on Heroku and its API will be used.`,
      20,
      190
    );
    doc.text(
      `1. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      197
    );
    doc.text(
      `2. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      203
    );
    doc.text(
      `3. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      210
    );
    doc.text(
      `4. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      217
    );
    doc.text(
      `5. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      224
    );

    doc.setFont("serif", "bold");
    doc.setFontSize(14);
    doc.text(`How to implement the backend of AI?`, 20, 231);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `The backend of our AI for our web app and project will be hosted on Heroku and its API will be used.`,
      20,
      238
    );
    doc.text(
      `1. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      245
    );
    doc.text(
      `2. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      252
    );
    doc.text(
      `3. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      259
    );
    doc.text(
      `4. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      266
    );
    doc.text(
      `5. the hosting process will be done under supervision  of  the technical head and data shared to team.`,
      20,
      273
    );

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text("Host: Abhishek Kumar Pandey (Marketing Head)", 20, 285);

    doc.save("report.pdf");
  };

  return (
    <>
      <button onClick={() => getPDF()} className="bg-black text-white p-1">
        Get PDF
      </button>
    </>
  );
};
export default MoMForm;
