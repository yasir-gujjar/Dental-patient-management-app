import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import { CiUser } from "react-icons/ci";
import Uselocalstorage from "../utils/Uselocalstorage";





const Header: FC = () => {


  return (
    // header section
    <header className="header-container strip">
      <div className="header-left">
        <img height={35} className={"header-logo"} src="./icon/citydentalcare.png" />
        <div className="">

        </div>

        <p className="brand-name"></p>
      </div>
      <div className="header-middle"></div>
      <div className="header-right">
        <div className="links">
          <NavLink to={"/user"}>

            <CiUser className="" />
          </NavLink>
          {Uselocalstorage() ?
            < NavLink to={"/logout"}>

              <button className="logout ">logout</button>
            </NavLink> : < NavLink to={"/signup"}>

              <button className="btn ">signup</button>
            </NavLink>}




          <button >


          </button>
        </div>
      </div>
    </header >
  );
};

export default Header;
