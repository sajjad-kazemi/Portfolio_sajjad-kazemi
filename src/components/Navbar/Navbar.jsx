import { Envelope, Person, ViewList } from "react-bootstrap-icons";
import { Link, Outlet } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <nav className={`${style.navbar} navbar-expand-md`}>
        <div className={style.logo}>
          <div className={style.logoImage}></div>
          <h1>
            <a
              target={"_blank"}
              title="my github"
              href="https://github.com/sajjad-kazemi"
            >
              Sajjad Kazemi
            </a>
          </h1>
        </div>
        <ul className={style.list}>
          <li>
            <Link onClick={scrollUp} to="/">
              <ViewList /> {window.innerWidth > 768 && "PORTFOLIO"}
            </Link>
          </li>
          <li>
            <Link onClick={scrollUp} to="/About">
              <Person />
              {window.innerWidth > 768 && <span className={style.aboutLink} >ABOUT ME</span>}
            </Link>
          </li>
          <li>
            <Link onClick={scrollUp} to="/Contact">
              <Envelope /> {window.innerWidth > 768 && "CONTACT"}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
