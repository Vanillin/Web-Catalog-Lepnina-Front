import { Link } from "react-router-dom";
import ViewCorner from "./script-corner";

export default function MainPage() {
  return (
    <body className="backcolor-gray">
      <nav className="nav-top backcolor-darkgray">
        <p className="color-white">Навигация</p>
        <div className="nav-top-body">
          <hr className="color-white" />
          <ul>
            <li>
              <Link to="/" className="color-white hover-ligthorange">
                Главная
              </Link>
            </li>
            <li>
              <a className="color-orange">Карнизы</a>
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
      </nav>
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <p className="color-white">Навигация</p>
            <hr className="color-white" />
            <ul>
              <li>
                <Link to="/" className="color-white hover-ligthorange">
                  Главная
                </Link>
              </li>
              <li>
                <a className="color-orange">Карнизы</a>
              </li>
              <li>
                {/* <a
                  className="color-white hover-ligthorange"
                  href="moldings.html"
                > */}
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
          </nav>
        </div>
        <ViewCorner />
      </div>
    </body>
  );
}
