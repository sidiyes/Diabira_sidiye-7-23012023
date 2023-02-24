import React, { useState } from "react";
import "./Collapse.css";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={() => toggle()}>
        {title}
        <p className="collapse__icon">
          {!isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </p>
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
};

export default Collapse;
