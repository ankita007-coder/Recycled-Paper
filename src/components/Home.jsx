import React from "react";
import "../assets/css/Home.css";
import { flexdata } from "../data";
import NavbarC from "./NavbarC";
const Home = () => {
  return <div className="home">
  <NavbarC/>
    <div className="para">
        <h2>If You Cannot REDUCE <br/> Then RECYCLE It.</h2>
        <p>Recycled paper is paper that is reconstituted into paper again. The best paper to be using 
            is 100% post-consumer recycled paper that is made from paper scrap that can, no longer be used 
            for its intended purpose by the consumer, which is reprocessed into paper again.</p>
    </div>
    <div className="flex-box-container">
    <div className="flex-box">
        {
            flexdata.map((f)=>{
                return   <div className="box" key={f.id}>
                            <div className="design">
                                <img src={f.image} className="small"/>
                            </div>
                            <p>{f.text}</p>
                            </div>
            })
        }
        
    </div>

    </div>
  </div>
};

export default Home;
