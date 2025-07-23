import React, { useState } from "react";
import "../css/Header.css";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlices";
import { useDispatch } from "react-redux";

function Header() {
  const [theme, setTheme] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((store) => store.basket);

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
          {theme ? (
            <FaRegSun className="icon" onClick={changeTheme} />
          ) : (
            <FaRegMoon className="icon" onClick={changeTheme} />
          )}
          <Badge
            onClick={() => dispatch(setDrawer())}
            badgeContent={products.length}
            color="warning"
          >
            <FaShoppingBasket
              style={{ marginRight: "5px", marginTop: "-15px" }}
              className="icon-sepet"
            />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
