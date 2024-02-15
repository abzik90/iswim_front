import React from "react";
import { FiArrowRight } from "react-icons/fi";

import BannerBackgroundVideo from "../Assets/iswim_promo.mp4";

const BannerVideo = () => {
    return (
        <div className="home-bannerVideo-container">
        <video className="home-bg-video" src={BannerBackgroundVideo} autoPlay muted loop ></video>
            <div className="home-banner-container">
                <div className="home-text-section">
                <h1 className="primary-heading">
                Обучаем плаванию детей и взрослых
                </h1>
                <p className="primary-text">
                профессиональная школа плавания
                </p>
                <button className="secondary-button">
                    Записаться <FiArrowRight />{" "}
                </button>
                
                </div>
            </div>
        </div>
    );
  };
  
export default BannerVideo;
  
