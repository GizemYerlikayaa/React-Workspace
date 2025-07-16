import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır.");
  });
  useEffect(() => {
    console.log("ilk render edildiğinde çalışır.");
  }, []);
  useEffect(() => {
    console.log(
      "ilk render edildiğinde ve firstname ve lastname state değerlerinde değişiklik olduğunda çalışır."
    );
  }, [firstName, lastName]);
  // useEffect(() => {
  //   console.log(
  //     "ilk render edildiğinde ve lastname state değeri değiştiğinde çalışır."
  //   );
  // }, [lastName]);

  return (
    <div>
      <div>
        <button onClick={() => setFirstName("Gizem")}>Adı Değiştir</button>
        <button onClick={() => setLastName("Yerlikaya")}>Soyad Değiştir</button>
      </div>
    </div>
  );
}

export default App;
