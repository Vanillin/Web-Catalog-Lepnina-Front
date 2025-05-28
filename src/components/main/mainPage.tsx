import React from "react";
import { Link } from "react-router-dom";
//import { Button, Grid, Avatar, Typography } from '@mui/material';
import backimage from "../images/background-image.jpg";
import navcorner from "../images/navigation/corner.png";
import navcornice from "../images/navigation/cornice.png";
import navdesigner from "../images/navigation/designer.png";
import navmolding from "../images/navigation/molding.png";

export default function MainPage() {
  return (
    <body id="top" className="backcolor-gray">
      <header>
        <img
          className="background-image screen"
          src={backimage}
          alt="background"
        />
        <div className="background-logo backcolor-darkgray">
          <div className="logo-top flex-spacebetween">
            <div className="logo-names">
              <p className="name-logo color-white">El.Decor</p>
              <p className="name-logo-under color-white">
                барельеф, лепнина, реставрация
              </p>
            </div>
            <div className="contacts-logo flex-spacebetween">
              <ul>
                <li>
                  <a
                    className="color-white hover-ligthorange"
                    href="https://vk.com/elisdecor"
                  >
                    vk.com/elisdecor
                  </a>
                </li>
                <li>
                  <a
                    className="color-white hover-ligthorange"
                    href="mailto:k.elistrat@mail.ru"
                  >
                    k.elistrat@mail.ru
                  </a>
                </li>
                <li>
                  <a
                    className="color-white hover-ligthorange"
                    href="tel:+79806515887"
                  >
                    8 980 651-58-87
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="color-white" />
          <div className="menu flex-spacebetween">
            <p className="color-white">О нас</p>
            <a className="color-white hover-ligthorange" href="#catalog">
              Каталог
            </a>
            <p className="color-white">Контакты</p>
            <p className="color-white">Отзывы</p>
            {/* <!-- 
                <a class="color-white hover-ligthorange" href="#bottom">Контакты</a>
                <a class="color-white hover-ligthorange" href="#about-us">О нас</a>
                <a class="color-white hover-ligthorange" href="#review">Отзывы</a> 
                --> */}
          </div>
        </div>
      </header>

      {/* <section id="about-us" class="screen">
        <div class="about-us flex-spacebetween">
            <div class="text-section color-white">
                <ul>
                    <p>Профессиональное качество и мастерство, огромное количество заказов и положительных отзывов</p>
                    <p>Огромный спект работ, реставрация, производство и монтаж лепнины</p>
                </ul>
            </div>
            <div class="picture-section">
                <img src="main/images/about-us.jpg" alt="О нас">
            </div>
        </div>
    </section>  */}

      <section id="catalog">
        <div className="catalog">
          <div className="element-sections backcolor-darkgray">
            <img src={navcornice} alt="Карнизы" />
            <p className="color-white">Кaрнизы</p>
            <Link to="/catalog"></Link>
          </div>
          <div className="element-sections backcolor-darkgray">
            <img src={navmolding} alt="Молдинги" />
            <p className="color-white">Молдинги</p>
            {/* <a href="moldings.html"></a> */}
          </div>
          <div className="element-sections backcolor-darkgray">
            <img src={navcorner} alt="Угловые" />
            <p className="color-white">Угловые</p>
            {/* <a href="corner.html"></a> */}
          </div>
          <div className="element-sections backcolor-darkgray">
            <img src={navdesigner} alt="Декоративные" />
            <p className="color-white">Декоративные</p>
            {/* <a href="designers.html"></a> */}
          </div>
        </div>
      </section>
      {/* <!-- 
    <section id="review" class="screen backcolor-darkgray">

        <button class="left-button-slide color-white" onclick="showPreviousSlide()" aria-label="Посмотреть предыдущий слайд">&lt;</button>
        <div class="elements-review flex-spacebetween backcolor-gray">

            <div class="element-review">                
                <div id="picture-section" class="picture-section">
                </div>
                <div id="text-section" class="text-section color-white">
                </div>
            </div>

            <script type="text/javascript" src="main/scripts/script-reviews.js"> </script>
        </div>
        <button class="right-button-slide color-white" onclick="showNextSlide()" aria-label="Посмотреть следующий слайд">&gt;</button>
        <script type="text/javascript" src="main/scripts/script-slider.js" ></script>
    </section> 
    --> */}
      <footer className="backcolor-darkgray flex-spacebetween" id="bottom">
        <div>
          <ul>
            <li>
              <p className="color-orange">Навигация</p>
            </li>
            <li>
              <Link to="/catalog" className="color-white hover-ligthorange">
                Карнизы
              </Link>
            </li>
            <li>
              {/* <a className="color-white hover-ligthorange" href="moldings.html"> */}
              Молдинги
              {/* </a> */}
            </li>
            <li>
              {/* <a
                className="color-white hover-ligthorange"
                href="designers.html"
              > */}
              Декоративные
              {/* </a> */}
            </li>
            <li>
              {/* <a className="color-white hover-ligthorange" href="corner.html"> */}
              Угловые
              {/* </a> */}
            </li>
          </ul>
        </div>
        <div className="footer-contacts">
          <ul>
            <li>
              <p className="color-orange">Контакты/Ссылки</p>
            </li>
            <li>
              <a
                className="color-white hover-ligthorange"
                href="https://vk.com/elisdecor"
              >
                vk.com/elisdecor
              </a>
            </li>
            <li>
              <a
                className="color-white hover-ligthorange"
                href="mailto:k.elistrat@mail.ru"
              >
                k.elistrat@mail.ru
              </a>
            </li>
            <li>
              <a
                className="color-white hover-ligthorange"
                href="tel:+79806515887"
              >
                8 980 651-58-87
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-but-up">
          <a className="color-white backcolor-gray" href="#top">
            &#129153;
          </a>
        </div>
      </footer>
      <div className="in-progress backcolor-darkgray">
        <p className="color-white">Сайт находится в разработке</p>
      </div>
    </body>
  );
}
