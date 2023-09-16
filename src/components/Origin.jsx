import React from "react";
import NavbarC from "./NavbarC";
import "../assets/css/Origin.css";

const Origin = () => {
  return (
    <div className="origin">      
      <NavbarC />   
        <p className="text">
          The Chinese, who invented paper around the 2nd century BC, were
          pioneers in recycling paper materials. During the papermaking process,
          they collected discarded scraps of paper, broken or damaged sheets,
          and other paper waste. These materials were often added to the paper
          pulp mixture during the papermaking process, effectively recycling
          paper content.
        </p>  
    </div>
  );
};

export default Origin;
