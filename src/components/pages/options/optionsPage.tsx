import { Link } from "react-router-dom";
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
        <p className="color-white">Настройки</p>
        <hr className="color-white" />    
        <ul>
          <li>
            <a className="color-white hover-ligthorange">Изменить</a>
          </li>
          <li>
            <a className="color-white hover-ligthorange"></a>
          </li>
        </ul> 
        <hr className="color-white" />    
        <div className="nav-top-body">
          <ul>
            <li>
              <Link to="/catalog" className="color-white hover-ligthorange">
                В каталог
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="body-flex">
        <div>
          <nav className="nav-left backcolor-darkgray">
            <UserInfo user = {user}/>
            <hr className="color-white" />    
            <ul>
                <li>
                    <a className="color-white hover-ligthorange">Изменить что-то</a>
                </li>
                <li>
                    <Link to="/catalog" className="color-white hover-ligthorange">
                        В каталог
                    </Link>
                </li>
            </ul>
          </nav>
        </div>
        <div>

        </div>
      </div>
    </body>
  );
}
