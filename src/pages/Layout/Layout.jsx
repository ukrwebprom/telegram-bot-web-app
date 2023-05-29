import { Outlet } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import './layout.scss';
import { useState } from "react";
import { Link } from "react-router-dom";

export const Layout = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(c => !c);
    }
  return (
    <div className="home-container">
        <header>
        <h1 className="main-title">Yurii Pochtiennykh</h1>
        <ul className="expertise-list small-text">
          <li>Junior Full-Stack Developer</li>
          <li>Designer</li>
        </ul>
      </header>
      <button type="button" className="menu-btn" onClick={toggleMenu}>
        <MenuIcon className="menu-icon" />
      </button>
      {menu && 
        <div className="menu">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='skills'>My Skills</Link></li>
                <li>Contacts & links</li>
            </ul>
        </div>
      }
      <Outlet />
    </div>
  );
};
