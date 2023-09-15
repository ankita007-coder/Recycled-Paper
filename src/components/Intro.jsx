import React from "react";
import "../assets/css/Intro.css";
import NavbarC from "./NavbarC";
const Intro = () => {
  return <div className="intro">
    <NavbarC/>
    <div className="text">
      <p>Paper recycling has long been a success story in terms of recovery,
and it's a process that continues to improve over time.</p>
      <h3>TYPES OF RECYCLED PAPER:</h3>
      <ul>
        <li><b>Post-Consumer Recycled Paper (PCR):</b> <p>PCR paper is made from
          paper products that have been used and discarded by consumers,
          such as newspapers, magazines, office paper, and cardboard.</p></li>
          <li><b>Pre-Consumer Recycled Paper (PCW):</b><p>PCW paper, also known 
          as “post-industrial recycled paper," is made from paper waste 
          generated during the manufacturing process.</p></li>
      </ul>
      <h3>PROPERTIES OF RECYCLED PAPER:</h3>
      <ul>
        <li><b>Fiber Content:</b>
          <p>Recycled paper typically contains a combination of recycled fibers 
and,some cases, virgin fibers.
          </p></li>
          <li><b>Quality and Printability:</b><p>Recycled papers may exhibit lower print quality compared to virgin
paper, while others are designed for high-quality printing.</p></li>
      </ul>
    </div>
    </div>;
};

export default Intro;
