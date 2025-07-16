import { useState } from "react";
import "./App.css";

function App() {
  const [vize1, setVize1] = useState("");
  const [vize2, setVize2] = useState("");

  const ortalamaBul = () => {
    debugger;
    const toplamSonuc = topla() / 2;
    yazdir(toplamSonuc);
  };

  const topla = () => {
    debugger;
    const toplam = vize1 + vize2;
    return toplam;
  };

  const yazdir = (sonuc) => {
    debugger;
    console.log("ortalama: " + sonuc);
  };

  return (
    <>
      <div>
        <input
          type="number"
          value={vize1}
          onChange={(e) => {
            setVize1(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <input
          type="number"
          value={vize2}
          onChange={(e) => {
            setVize2(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <button onClick={ortalamaBul}>Ortalama Bul</button>
      </div>
    </>
  );
}

export default App;
