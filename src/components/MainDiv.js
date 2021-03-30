import React, { useEffect, useState } from "react";
import Directory from "./directory.js";

function MainDiv() {
  const [directory, setDirectory] = useState({});
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
      <div className=" container ">
        <div className="card ">
          <div className="card-content center-align">
            <h1>
              {/* <i className="medium material-icons">{this.state.directory[0].name.first}</i> */}
            </h1>

            <div className=" col left-align ">test{dString}</div>
          </div>

          <div className="card-content center-align">
            <span className="card-title activator grey-text text-darken-4"> </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDiv;
