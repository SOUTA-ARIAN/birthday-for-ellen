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
                <div className="letter">
                    <p>Happy Birthday yaa lenn 🎉</p>
                    <p>
                    Semoga hari ini berjalan menyenangkan dan semua hal baik datang ke kamu. 
                    Makasih juga karena selama ini stream dan kontenmu selalu seru buat ditonton 
                    apalagi pas lagi belajar enak aja gitu sambil nonton kamu, dan
                    jangan lupa menerima kenyataan bahwa umurmu sekarang bertambah satu angka lagi 😆.
                    </p>
                    <p>
                    Semoga ke depannya makin lancar semua yang lagi dijalani, sehat terus, 
                    dan jangan terlalu capek juga pas streaming 😄
                    </p>
                    <p>
                    Pokoknya semoga ulang tahunnya bahagia dan penuh momen seru! 🎂
                    </p>
                    <p style={{ textAlign: "right" }}>from,</p>
                    <p style={{ textAlign: "right" }}>syy</p>
                </div>
            </div>

            <div className="title">
                <p>Buka coba</p>
            </div>
            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/thanks-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">thanks</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sorry-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sorry</span>
                </button>
            </div>

            <div className="img-btn">
                <button className="img-button" onClick={() => openPopup("img/happy-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">happy</span>
                </button>
                <button className="img-button" onClick={() => openPopup("img/sad-letter.png")}>
                    <img src="img/letter2.png" alt="letter" className="img-small"/>
                    <span className="btn-text">sad</span>
                </button>
            </div>

            <button className="btn" onClick={() => navigate("/")}>
                That's It!
            </button>

            {popupImage && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <img src={popupImage} alt="Popup" className="popup-image" />
                        <button className="close-btn" onClick={closePopup}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TheBirthdayLetter;
