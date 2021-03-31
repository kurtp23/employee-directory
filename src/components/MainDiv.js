import React, { useEffect, useState } from "react";
import Directory from "./directory.js";
import Cards from "./card.js";
// import For from "react-loops";
function MainDiv() {
  const [directory, setDirectory] = useState([]);
  const [directorySort, setDirectorySort] = useState([]);
  const [directoryReturn, setDirectoryReturn] = useState([]);

  useEffect(() => {
    Directory.search().then((data) => {
      const employees = data.data.results;

      setDirectory(employees);
      setDirectoryReturn(employees);
      console.log(directory);
    });
  }, []);
  //ask teacher
  const handleSort = () => {
    const newDirectory = directory.sort((a, b) => a.name.first.localeCompare(b.name.first));
    console.log(newDirectory);
    setDirectorySort(newDirectory);
  };
  const handleFilterMale = () => {
    const dirFilter = [];
    directory.map((person) => {
      if (person.gender === "male") {
        dirFilter.push(person);
      }
    });
    setDirectory(dirFilter);
  };
  const handleFilterFemale = () => {
    const dirFilter = [];
    directory.map((person) => {
      if (person.gender === "female") {
        dirFilter.push(person);
      }
    });
    setDirectory(dirFilter);
  };
  const handleReturn = () => {
    setDirectory(directoryReturn);
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper center-align">
          Employee Directory
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <button onClick={handleReturn}> full directory </button>
            <button onClick={handleSort}> alphabetical order </button>
            <button onClick={handleFilterMale}>Filter by male</button>
            <button onClick={handleFilterFemale}>Filter by female</button>
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
