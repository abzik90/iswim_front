import React from "react";

const CardLogo = ({img, text}) => {
    return (
        <div className="cardContainer">
            <img className="card-img" src={img}/>
            <div className="card-text">
                {text}
            </div>
        </div>  
    );
  };
  
export default CardLogo;
  