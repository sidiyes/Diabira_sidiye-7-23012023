import React from "react";
import "./Host.css";

const Host = ({ host }) => {
  const splitName = host.name.split(" ");
  const [name, lastname] = splitName;

  return (
    <div className="host">
      <div className="host__name">
        <p className="host__firstname">{name}</p>
        <p className="host__lastname">{lastname}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
};

export default Host;
