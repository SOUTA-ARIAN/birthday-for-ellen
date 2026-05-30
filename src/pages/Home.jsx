import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="home-layout">
        <div className="home-left" aria-hidden="true" />

        <div className="home-center">

            <div className="text-container">
              <div className="text">
                <Typewriter
                  options={{
                    strings: ["HAPPY BIRTHDAY"],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                  }}
                />
              </div>

              <img
                src="/img/nih_kue-removebg-preview.png"
                alt="nih kue"
                className="home-kue"
              />

              <button className="btn" onClick={() => navigate("/letter")}>
                Next
              </button>
            </div>

        </div>

        <div className="home-right" aria-hidden="true" />



        <div className="falling-flowers-screen" aria-hidden="true">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={`flower flower-${i + 1}`}>
              🌸
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;


