import React from "react";
import Directory from "./directory.js";

class MainDiv extends React.Component {
  state = {
    directory: "",
  };

  displayEmployee = () => {
    Directory.search().then((data) => {
      console.log(data.data.results);
      const employees = data.data.results;
      console.log(employees);
      this.setState({ directory: employees });
    });
  };
  render() {
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
                  console.log("hello");
                  this.displayEmployee();
                  console.log(this.state);
                }}
              >
                employee
              </button>
              <li></li>
              <li></li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default MainDiv;
