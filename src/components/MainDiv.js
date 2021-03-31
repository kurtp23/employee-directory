import React, { useEffect, useState } from "react";
import Directory from "./directory.js";
import Cards from "./card.js";
// import For from "react-loops";
function MainDiv() {
  const [directory, setDirectory] = useState([]);

  useEffect(() => {
    Directory.search().then((data) => {
      const employees = data.data.results;

      setDirectory(employees);
      console.log(directory);
    });
  }, []);
  const handleSort = () => {
    console.log("hello");
    const newDirectory = directory.sort((a, b) => a.name.first.localeCompare(b.name.first));
    console.log(directory.sort((a, b) => a.name.first.localeCompare(b.name.first)));
    setDirectory(newDirectory);
    console.log("hello");
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper center-align">
          Employee Directory
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <ul id="dropdown2" className="dropdown-content">
              <li>
                <a href="#!">
                  one<span className="badge">1</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  two<span className="new badge">1</span>
                </a>
              </li>
              <li>
                <a href="#!">three</a>
              </li>
            </ul>
            <a className="btn dropdown-trigger" href="#!" data-target="dropdown2">
              Dropdown<i className="material-icons right">arrow_drop_down</i>
            </a>
            <li></li>
            <li></li>
            <button onClick={handleSort}>sort alphebetically</button>
          </ul>
        </div>
      </nav>
      <div className="row">
        {directory.map((person) => (
          <Cards person={person} />
        ))}
      </div>
    </>
  );
}

export default MainDiv;
