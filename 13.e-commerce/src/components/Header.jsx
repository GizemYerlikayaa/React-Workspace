import React, { useState } from "react";
import "../css/Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();
  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "white";
    } else {
      root.style.backgroundColor = "white";
      root.style.color = "black";
    }
    setTheme(!theme);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/e.png" alt="" />
        <p className="logo-title">Fashion</p>
      </div>
      <div className="flex-row">
        <input
          className="search-input"
          type="text"
          name=""
          id=""
          placeholder="Ara.."
        />
        <div>
          <FaShoppingBasket className="icon-sepet" />
          {theme ? (
            <FaRegSun className="icon" onClick={changeTheme} />
          ) : (
            <FaRegMoon className="icon" onClick={changeTheme} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
