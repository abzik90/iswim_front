import React from "react";

import { Card, CardContent, Typography } from '@mui/material';

const NewsCard = ({img, title, text, date}) => {
    console.log({img});
    return (
        <div className="card">
            <img src={img} alt="news image" style={{ width: '100px', marginBottom: '0px' }} />
            <div className="card-inner">
                    <h4>{title}</h4>
                    <p>{text}</p>
                    <br/>
                    <span>{date}</span>
            </div>
        </div>
    );
  };
  
export default NewsCard;
  
