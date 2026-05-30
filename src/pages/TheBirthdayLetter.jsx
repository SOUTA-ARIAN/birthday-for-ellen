import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TheBirthdayLetter() {
  const navigate = useNavigate();
  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (imageSrc) => {
    setPopupImage(imageSrc);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="app">
      <div className="paper">
        <div className="the-birthday-letter-side-by-side">

          <div className="the-birthday-letter-center">
            <div className="letter">
              <p>Happy Birthday yaa lenn 🎉</p>
              <p>
                Semoga hari ini berjalan menyenangkan dan semua hal baik datang ke kamu. 
                Makasih juga karena selama ini stream dan kontenmu selalu seru buat ditonton 
                apalagi pas lagi belajar enak aja gitu sambil nonton kamu, dan jangan lupa
                menerima kenyataan bahwa umurmu sekarang bertambah satu angka lagi 😆.
              </p>
              <p>
                Semoga ke depannya makin lancar semua yang lagi dijalani, sehat terus, 
                dan jangan terlalu capek juga pas streaming 😄
              </p>
              <p>Pokoknya semoga ulang tahunnya bahagia dan penuh momen seru! 🎂</p>
              <p style={{ textAlign: "right" }}>from, syy</p>
            </div>
          </div>

          <div className="the-birthday-letter-right" />
        </div>
      </div>

      

      <button className="btn" onClick={() => navigate("/letter")}> 
        That's It!
      </button>

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={popupImage} alt="Popup" className="popup-image" />
            <button className="close-btn" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TheBirthdayLetter;

