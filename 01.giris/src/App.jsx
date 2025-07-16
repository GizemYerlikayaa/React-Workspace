import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // js kodları vs return dışına yazılır
  // html kodları retun içine yazılır
  // eğer html kısmında js yazman gerekirsede {} jsx ismi bunun arasına yazman lazım

  let a = 7;
  const firstName = "Gizem";

  let vize1 = 80;
  let vize2 = 90;

  let sonuc = true;

  let isimler = ["Gizem", "Enes"];

  return (
    <div>
      <p>a değişkeninin degeri : {a}</p>
      <p>Müşterinin adı: {firstName}</p>

      <p>Ortalama: {(vize1 + vize2) / 2}</p>

      {sonuc ? <p>Ehliyeti Alabilirsin.</p> : <p>Ehliyeti Alamazsın!</p>}

      {(vize1 + vize2) / 2 >= 50 ? (
        <p>Desten Geçtin.</p>
      ) : (
        <p>Dersten Kaldın</p>
      )}

      {isimler.map((isim, index) => (
        <div
          style={{
            backgroundColor: "orange",
            border: "1px solid black",
          }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;
