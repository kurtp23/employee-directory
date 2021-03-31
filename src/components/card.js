import React from "react";

function Cards({ person }) {
  return (
    <div key={person.phone}>
      <div className="col s4 m3">
        <div className="card small center-align">
          <div className="card-image ">
            <img
              style={{
                height: 200,
                width: 232,
                justifyContent: "center",
                alignItems: "center",
              }}
              alt="employee "
              src={person.picture.large}
            />
          </div>
          <div className="card-content">
            <p>
              {person.name.first} {person.name.last}
              <br></br>
              {person.email} {person.phone}
              <br></br>
              location: {person.location.city},{person.location.state},{person.nat}
            </p>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
