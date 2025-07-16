import React, { useActionState, useState } from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
  let API_KEY = "fca_live_SeCSCDUZ3LKNcMdVptrnx55MQS7eYsNnjCefoCFe";

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = response.data.data[toCurrency];
    const sonuc = (result * amount).toFixed(2);
    setResult(sonuc);
  };

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
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          className="amount"
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowRight
          style={{
            fontSize: "30px",
            color: "white",
            marginRight: "10px",
          }}
        />

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input value={result} type="number" className="result" readOnly />
      </div>

      <div>
        <button onClick={exchange} className="exchangeButton">
          Çevir
        </button>
      </div>
    </div>
  );
}

export default Currency;
