import React from "react";
import { Link } from "react-router-dom";
import backimage from "../../images/background-image.jpg";
import navcorner from "../../images/navigation/corner.png";
import navcornice from "../../images/navigation/cornice.png";
import navdesigner from "../../images/navigation/designer.png";
import navmolding from "../../images/navigation/molding.png";

export default function MainPage() {
  return (
    <div id="top" className="backcolor-gray body">
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

            <Link to="/catalog" className="color-white hover-ligthorange">
              Каталог
            </Link>
            {/* <a className="color-white hover-ligthorange" href="#catalog">
              Каталог
            </a> */}
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

      {/*  <section id="review" className="screen backcolor-darkgray">

        <button className="left-button-slide color-white" onclick="showPreviousSlide()" aria-label="Посмотреть предыдущий слайд">&lt;</button>
        <div className="elements-review flex-spacebetween backcolor-gray">

            <div className="element-review">                
                <div id="picture-section" className="picture-section">
                </div>
                <div id="text-section" className="text-section color-white">
                </div>
            </div>

            <script type="text/javascript" src="main/scripts/script-reviews.js"> </script>
        </div>
        <button className="right-button-slide color-white" onclick="showNextSlide()" aria-label="Посмотреть следующий слайд">&gt;</button>
        <script type="text/javascript" src="main/scripts/script-slider.js" ></script>
    </section> */}

      {/* <section id="catalog">
        <div className="catalog">
          <div>
            <div className="element-sections first-element backcolor-darkgray">
              <img src={navcornice} alt="Карнизы" />
              <p className="color-white">Карнизы</p>
            </div>
            <div className="element-sections second-element backcolor-darkgray">
              <img src={navmolding} alt="Молдинги" />
              <p className="color-white">Молдинги</p>
            </div>
            <div className="element-sections third-element backcolor-darkgray">
              <img src={navcorner} alt="Угловые" />
              <p className="color-white">Угловые</p>
            </div>
            <div className="element-sections four-element backcolor-darkgray">
              <img src={navdesigner} alt="Декоративные" />
              <p className="color-white">Декоративные</p>
            </div>
          </div>
          <div>
            <div className="catalog-but backcolor-darkgray">
              <p className="color-white">В каталог</p>
              <Link to="/catalog"></Link>
            </div>
          </div>
        </div>
      </section> */}

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

      <footer className="backcolor-darkgray flex-spacebetween" id="bottom">
        <div>
          <ul>
            <li>
              <p className="color-orange">Навигация</p>
            </li>
            <li>
              <Link to="/catalog" className="color-white hover-ligthorange">
                Каталог
              </Link>
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
    </div>
  );
}
