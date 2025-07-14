import React from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa";

function Currency() {
  return (
    <div className="currency-div">
      <div
        style={{
          fontFamily: "arial",
          color: "white",
          width: "100½",
          textAlign: "center",
        }}
      >
        <h3>Döviz Kuru Uygulaması</h3>
      </div>

      <div style={{ marginTop: "25px" }}>
        <input type="number" className="amount" />
        <select className="from-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TL</option>
        </select>

        <FaArrowRight
          style={{
            fontSize: "30px",
            color: "white",
            marginRight: "10px",
          }}
        />

        <select className="to-currency-option">
          <option>TL</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input type="number" className="result" />
      </div>

      <div>
        <button className="exchangeButton">Çevir</button>
      </div>
    </div>
  );
}

export default Currency;
