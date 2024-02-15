import React from "react";

const TrainingSign = () => {
    return (
        <div className="home-training-sign">
        <div className="home-training-text">
          <h1>Запишитесь на тренировку</h1>
          <p>Позвоните или напишите нам на WhatsApp, наши менеджеры проконсультируют и помогут Вам!</p>
          <div className="home-btn-container">
            <button className="secondary-button">
                Позвонить{" "}
            </button>
            <button className="secondary-button">
                Написать WhatsApp {" "}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default TrainingSign;
  