import React from "react";

import NewsCard from "./NewsCard";

const newsObj = [
    {
        img: require('../Assets/photo1.jpg'),
        title: "Внутриклубные соревнования",
        text: "каждые 3 месяца мы проводим внутриклубные соревнования, чтобы фиксировать прогресс наших учеников и придать им тот важный соревновательный дух и вкус победы.",
        date: "05.11.2023"
    },
    {
        img:  require('../Assets/photo2.jpg'),
        title: "Внешние соревнования",
        text: "наша профессиональная команда iSwim pro активно участвует в национальных и международных соревнованиях и показывает отличные результаты",
        date: "26.10.2023"
    },
    {
        img:  require('../Assets/photo3.jpg'),
        title: "iSwim talks",
        text: "мы за единство и обучение, поэтому проводим открытые встречи с известными пловцами и людьми, неравнодушными к этому виду спорта и щедро делящимися своим ценным опытом.",
        date: "14.10.2023"
    },
    {
        img:  require('../Assets/photo4.jpg'),
        title: "Команда Fujairah.ma",
        text: "Мы обучаемся сами и проводим обмен опытом с международным спортивным сообществом. Последний совместный сбор с участием юных пловцов из Объединенных Арабских Эмиратов прошел на базе наших бассейнов в августе 2023 года.",
        date: "17.08.2023"
    }
];
const News = () => {
    return (
        <div className="home-news">
            <h1>Наши события</h1>
            <div className="news-card-container">
            {newsObj.map((item) => (
              <NewsCard img={item.img} title={item.title} text={item.text} date={item.date}/>
            ))}
            </div>
        </div>
    );
  };
  
export default News;
  
