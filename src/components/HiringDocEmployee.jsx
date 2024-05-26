import moment, { duration } from "moment";
import { jsPDF } from "jspdf";
import Header from "./Header";
import { useState } from "react";
import { Link } from "react-router-dom";
const HiringDocEmployee = () => {
  const [uname, setuname] = useState("");
  const [joiningdate, setJoiningDate] = useState("");
  const [compensation, setCompensation] = useState("");
  const [duration1, setDuration] = useState("");
  const [hours, setHours] = useState("");

  const getPDF = (e) => {
    e.preventDefault();
    const role = document.getElementById("role").value;
    const category = document.getElementById("category").value;
    const doc = jsPDF();
    doc.setFont("serif", "bold");
    doc.setFontSize(35);
    doc.text("Venture Linked", 20, 17);
    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.setLineWidth(1);

    doc.line(20, 22, 190, 22);
    doc.text(`Dear ${uname},`, 20, 29);

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    doc.text(
      `We the Venture Linked Team is delighted to extend you the offer of ${role}  in our firm, `,
      20,
      37
    );
    doc.text(
      `we are sure that you will definitely perform very well in our ${role} team and help our `,
      20,
      44
    );
    if (role === "UI/UX Designer") {
      doc.text(
        `startup grow.Your skills are really very impressive and the portfolio you developed is really very`,
        20,
        51
      );
      doc.text(
        `competetive.The creative skills you have shown during the interview proccess also make`,
        20,
        58
      );
    }
    if (role === "Web Developer" || role === "Android Developer") {
      doc.text(
        `startup grow.Your skills are really very impressive and the projects you developed is really very`,
        20,
        51
      );
      doc.text(
        `competetive.The problem solving skills you have shown during the interview proccess also make`,
        20,
        58
      );
    }
    if (role === "Marketing" || role === "Accountant") {
      doc.text(
        `startup grow.Your skills are really very impressive and the experience you gained is really very`,
        20,
        51
      );
      doc.text(
        `competetive.The problem solving skills you have shown during the interview proccess also make`,
        20,
        58
      );
    }

    doc.text(
      `you the best candidate for this role.The offer details of the internship is as provided below:-`,
      20,
      64
    );
    doc.text(`1. Position: ${role}`, 20, 71);
    doc.text(`2. mode: Online`, 20, 81);
    doc.text(`3. Compensation: ${compensation}`, 20, 91);
    if (category === "Technical") {
      doc.text(
        `4. Reporting To: Aritra Chakraborty ( Technical Head )`,
        20,
        101
      );
    } else {
      doc.text(
        `4. Reporting To: Abhishek Kr. Pandey ( Management Head )`,
        20,
        101
      );
    }
    doc.text(`5. Joining Date: ${joiningdate}`, 20, 111);
    doc.text(`6. Timing : 9.00 AM - 5.00 PM (5 days week)`, 20, 121);
    doc.setFont("serif", "normal");
    doc.text(
      `The main roles & responsibilites for the ${role}  role are:-`,
      20,
      151
    );
    if (role === "Web Development") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day web development updates as per needs of the project or feature`,
        20,
        161
      );
      doc.text(
        `2. Communicating with the intern and management team as per project requirements`,
        20,
        171
      );
      doc.text(
        `3. Develop robust APIs,updating features,resolve issues,testing,Code review of interns in the team`,
        20,
        181
      );
      doc.text(
        `4. Working primarily on react.js for frontend devlopment and express.js,node.js and MongoDB for backend`,
        20,
        191
      );
    }

    if (role === "Android Development") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day android development updates as per needs of the project or feature`,
        20,
        161
      );
      doc.text(
        `2. Communicating with the team and management as per project requirements`,
        20,
        171
      );
      doc.text(
        `3. Integrating APIs,training and mentoring interns,work on updates as needed in the project`,
        20,
        181
      );
      doc.text(
        `4. Manage techical Documentation, Review code,perform testing and handle deployment needs`,
        20,
        191
      );
    }

    if (role === "UI/UX") {
      doc.setFont("serif", "normal");
      doc.text(`1. Managing day to day UI/UX updates as per needs.`, 20, 161);
      doc.text(
        `2. Communicating with team  and management as per project requirements`,
        20,
        171
      );
      doc.text(
        `3. Developing creative and attractive posts,banners,UI components as per need training UI/UX interns`,
        20,
        181
      );
      doc.text(
        `4. Working primarily on canva for building the creative UI components and help to fix UX issues`,
        20,
        191
      );
    }
    if (role === "Marketing") {
      doc.setFont("serif", "normal");
      doc.text(
        `1. Managing day to day digital marketing and social media needs of the firm`,
        20,
        161
      );
      doc.text(
        `2. Communicating with team and management as per requirements`,
        20,
        171
      );
      doc.text(
        `3. Running and managing ads on social media platform for gaining users in the application`,
        20,
        181
      );
      doc.text(
        `4. Regularly posting on social media platform making discussion with UI/UX team and interns.`,
        20,
        191
      );
    }

    doc.setFont("serif", "normal");
    doc.setFontSize(12);
    if (category === "Technical") {
      doc.text(`Aritra Chakraborty`, 20, 282);
      doc.setFontSize(10);
      doc.text(`( Technical Head )`, 20, 287);
    } else {
      doc.text(`Abhishek Kr. Pandey`, 20, 282);
      doc.setFontSize(10);
      doc.text(`( Management Head )`, 20, 287);
    }
    doc.setFont("serif", "normal");
    doc.setFontSize(9.5);
    doc.text("Date: " + moment().format("Do MMM YYYY"), 20, 291);

    doc.save(`${uname}HiringLetter.pdf`);
  };
  return (
    <>
      <Header />
      <div className="bg-[#FFA62F] ">
        <button className="bg-slate-200 mt-2 ml-2 p-2">
          <Link to="/Index">Go Back</Link>
        </button>
        <div className="main pb-4 pt-5   w-[100vw] bg-[#FFA62F] flex justify-center items-center">
          <div className="mt-10 lg:mt-10 formArea bg-white w-[97vw] lg:w-[70vw]  p-2  lg:pt-7 flex flex-col justify-center items-center flex-wrap rounded-2xl">
            <div className="header">
              <p className="text-[5vmin] font-bold  mt-2">
                Please Fill the details for Hiring Letter
              </p>
            </div>
            <form>
              <div className="mt-10 lg:mt-5 formArea bg-white w-[95vw] lg:w-[50vw]  lg:p-2   flex  justify-center items-center flex-wrap">
                <div className="left pb-1 w-[97vw]  lg:w-[50vw] ">
                  <ul className="flex gap-y-4 flex-col">
                    <li>
                      <input
                        type="text"
                        className="w-11/12 bg-slate-200 p-2"
                        placeholder="Enter candidate name..."
                        onChange={(e) => setuname(e.target.value)}
                      ></input>
                    </li>
                    <li>
                      Candidate Role:
                      <select
                        class="role"
                        id="role"
                        className="w-11/12 bg-slate-200 p-2 mt-1"
                      >
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Android Developer">
                          Android Developer
                        </option>
                        <option value="Marketing Executive">
                          Marketing Executive
                        </option>
                        <option value="Accountant">Accountant</option>
                      </select>{" "}
                    </li>

                    <li>
                      <input
                        type="text"
                        className="w-11/12 bg-slate-200 p-2"
                        placeholder="Enter Compensation..."
                        onChange={(e) => {
                          setCompensation(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      {" "}
                      <input
                        type="text"
                        className="w-11/12 bg-slate-200 p-2"
                        placeholder="Enter joining date..."
                        onChange={(e) => {
                          setJoiningDate(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      {" "}
                      <input
                        type="text"
                        className="w-11/12 bg-slate-200 p-2"
                        placeholder="Enter Duration..."
                        onChange={(e) => {
                          setDuration(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      {" "}
                      <input
                        type="text"
                        className="w-11/12 bg-slate-200 p-2"
                        placeholder="Set Hours needed..."
                        onChange={(e) => {
                          setHours(e.target.value);
                        }}
                      ></input>
                    </li>
                    <li>
                      Set Category{" "}
                      <select
                        class="category"
                        id="category"
                        className="w-11/12 bg-slate-200 p-2 mt-1"
                      >
                        <option value="Technical">Technical</option>
                        <option value="Management">Management</option>
                      </select>{" "}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center items-center mt-2">
                <button className="bg-black text-white p-2" onClick={getPDF}>
                  Get Report
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default HiringDocEmployee;
