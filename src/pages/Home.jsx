import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom"; 
import "../App.css";

function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="app">
      <div className="home-layout">
        <div className="home-left">
          <div className="home-bg" aria-hidden="true" />
          <div className="falling-flowers-screen" aria-hidden="true">
            <span className="flower flower-1">🌸</span>
            <span className="flower flower-2">🌸</span>
            <span className="flower flower-3">🌸</span>
            <span className="flower flower-4">🌸</span>
            <span className="flower flower-5">🌸</span>
            <span className="flower flower-6">🌸</span>
            <span className="flower flower-7">🌸</span>
            <span className="flower flower-8">🌸</span>
            <span className="flower flower-9">🌸</span>
            <span className="flower flower-10">🌸</span>
            <span className="flower flower-11">🌸</span>
            <span className="flower flower-12">🌸</span>
          </div>
        </div>




        <div className="home-center">
          <div className="text-container">
            <div className="text">
              <Typewriter
                options={{
                  strings: ["HAPPY BIRTHDAY 🎂"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                }}
              />
            </div>
            <button className="btn" onClick={() => navigate("/letter")}>
              Next
            </button>
          </div>
        </div>

        <div className="home-right" aria-hidden="true"></div>

      </div>
    </div>
  );
}

export default Home;
