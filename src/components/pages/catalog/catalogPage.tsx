import { Link } from "react-router-dom";
import ViewCorner from "./script-corner";
import UserInfo from "./userInfo";
import { User } from "../../../api/models/user";
import { Roles } from "../../../api/models/roles";
import { PictureFile } from "../../../api/models/pictureFile";

export default function CatalogPage() {

  const pictIcon: PictureFile = {
    id: 2
  }
  const user: User = {
    id: 1,
    name: "NamePerson",
    email: "123@mail.ru",
    role: Roles.User,
    icon: pictIcon
  };

  return (
    <body className="backcolor-gray">
      <nav className="nav-top backcolor-darkgray">
        <UserInfo user = {user}/>
        <hr className="color-white" />
        <p className="color-white">Навигация</p>
        <hr className="color-white" />
        <div className="nav-top-body">
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
            <UserInfo user = {user}/>
            <hr className="color-white" />
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
