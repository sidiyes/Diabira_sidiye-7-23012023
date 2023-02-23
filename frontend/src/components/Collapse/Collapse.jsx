import React, { useState } from "react";
import "./Collapse.css";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="collapse">
      <div className="collapse__title" onClick={() => toggle()}>
        {title}
        <p className="collapse__icon">{isOpen ? <i>iii</i> : <i>ooo</i>}</p>
      </div>
      {isOpen && <p className="collapse__content">{content}</p>}
    </div>
  );
};

export default Collapse;
