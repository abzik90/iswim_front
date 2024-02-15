import React from "react";

import Navbar from "../Widgets/Navbar";
import TrainingSign from "../Widgets/TrainingSign"
import BannerVideo from "../Widgets/BannerVideo"
import AboutSchool from "../Widgets/AboutSchool"
import News from "../Widgets/News"
const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
      <BannerVideo/>
      <TrainingSign/>
      <AboutSchool/>
      <News/>
    </div>
  );
};

export default Home;
