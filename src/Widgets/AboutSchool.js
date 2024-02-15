import React from "react";

import iswimKidsLogo from "../Assets/iswim_kids.webp"
import iswimSchoolLogo from "../Assets/iswim_school.webp"
import iswimProLogo from "../Assets/iswim_pro.webp"
import { Card, CardContent, Typography } from '@mui/material';

const AboutSchool = () => {
    return (
        <div className="home-about">
            <span>О ШКОЛЕ</span>
            <h1>Школа плавания iSwim</h1>
            <p>Наша миссия - качественно обучать людей плаванию и объединять их вокруг этого спорта.</p>
            <p>У нас есть 3 направления:</p>
            <div className="home-card-container">
                <Card className="card">
                    <CardContent>
                        <img src={iswimKidsLogo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
                        <Typography variant="h6" component="div">
                        тренировки для детей 4-6 лет упор - закладка навыков правильного плавания с детства
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent>
                        <img src={iswimSchoolLogo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
                        <Typography variant="h6" component="div">
                        базовые тренировки для детей и взрослых от начинающих до продолжающего уровня
                        </Typography>
                        
                    </CardContent>
                </Card>
                <Card className="card">
                    <CardContent>
                        <img src={iswimProLogo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
                        <Typography variant="h6" component="div">
                        профессиональная команда, стремящаяся к победам на республиканском и международном уровнях
                        </Typography>
                        
                    </CardContent>
                </Card>
            </div>
        </div>
    );
  };
  
export default AboutSchool;
  
