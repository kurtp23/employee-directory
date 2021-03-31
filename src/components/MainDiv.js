import React, { useEffect, useState } from "react";
import Directory from "./directory.js";
import Cards from "./card.js";
// import For from "react-loops";
function MainDiv() {
  const [directory, setDirectory] = useState([]);
  const [dString, setDString] = useState("");

  useEffect(() => {
    Directory.search().then((data) => {
      // console.log(data.data.results);

      const employees = data.data.results;
      let r = "";

      employees.forEach((element) => {
        r += element.name.first;
        r += element.email;
        r += "\n";
      });

      setDirectory(employees);
      setDString(r);
    });
    return "hello";
  });
  console.log(directory);

  return (
    <>
      <nav>
        {/* {this.displayEmployee()} */}
        <div className="nav-wrapper center-align">
          Employee Directory
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <button
              onClick={(event) => {
                event.preventDefault();
                // callApi();
              }}
            >
              employee
            </button>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
      <div className="row">{Cards(directory)}</div>
    </>
  );
}

export default MainDiv;
