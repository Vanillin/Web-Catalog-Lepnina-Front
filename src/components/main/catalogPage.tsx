export default function MainPage() {
  return (
    <body className="backcolor-gray">
      <nav className="nav-top backcolor-darkgray">
        <p className="color-white">Навигация</p>
        <div className="nav-top-body">
          <hr className="color-white" />
          <ul>
            <li>
              <a className="color-white hover-ligthorange" href="index.html">
                Главная
              </a>
            </li>
            <li>
              <a className="color-orange" href="cornices.html">
                Карнизы
              </a>
            </li>
            <li>
              <a className="color-white hover-ligthorange" href="moldings.html">
                Молдинги
              </a>
            </li>
            <li>
              <a
                className="color-white hover-ligthorange"
                href="designers.html"
              >
                Декоративные
              </a>
            </li>
            <li>
              <a className="color-white hover-ligthorange" href="corner.html">
                Угловые
              </a>
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
                <a className="color-white hover-ligthorange" href="index.html">
                  Главная
                </a>
              </li>
              <li>
                <a className="color-orange" href="cornices.html">
                  Карнизы
                </a>
              </li>
              <li>
                <a
                  className="color-white hover-ligthorange"
                  href="moldings.html"
                >
                  Молдинги
                </a>
              </li>
              <li>
                <a
                  className="color-white hover-ligthorange"
                  href="designers.html"
                >
                  Декоративные
                </a>
              </li>
              <li>
                <a className="color-white hover-ligthorange" href="corner.html">
                  Угловые
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="grid" id="grid">
          {/* <script type="text/javascript" src="main/scripts/script-cornices.js">
            {" "}
          </script> */}
        </div>
      </div>
    </body>
  );
}
