import React, { useEffect, useState } from "react";
import Directory from "./directory.js";
import Cards from "./card.js";
// import For from "react-loops";
function MainDiv() {
  const [directory, setDirectory] = useState([]);

  const [display, setDisplay] = useState();

  useEffect(() => {
    Directory.search().then((data) => {
      const employees = data.data.results;
      setDirectory(employees);
      console.log(directory);
    });
  }, []);
  //ask teacher
  const handleDisplay = (display) => {
    switch (display) {
      case "alphabetical":
        const newDirectory = [...directory];
        return newDirectory.sort((a, b) => a.name.first.localeCompare(b.name.first));
      case "male":
        return directory.filter((person) => person.gender === "male");
      case "female":
        return directory.filter((person) => person.gender !== "male");
      default:
        return directory;
    }
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper center-align">Employee Directory</div>
      </nav>
      <ul id="nav-mobile" className="center ">
        <button className="waves-effect waves-light btn-small" onClick={() => setDisplay()}>
          {" "}
          full directory{" "}
        </button>
        <button
          className="waves-effect waves-light btn-small"
          onClick={() => setDisplay("alphabetical")}
        >
          {" "}
          alphabetical order{" "}
        </button>
        <button className="waves-effect waves-light btn-small" onClick={() => setDisplay("male")}>
          Filter by male
        </button>
        <button className="waves-effect waves-light btn-small" onClick={() => setDisplay("female")}>
          Filter by female
        </button>
      </ul>
      <div className="row">
        {handleDisplay(display).map((person) => (
          <Cards person={person} />
        ))}
      </div>
    </>
  );
}

export default MainDiv;
