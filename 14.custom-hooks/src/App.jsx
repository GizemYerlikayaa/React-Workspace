import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useCopyToClipBoard from "./hooks/useCopyToClipboard";

function App() {
  // const { count, increase, decrease } = useCounter();
  // const { open, change } = useToggle();
  const [copied, copy] = useCopyToClipBoard("Pes etme çalış");
  return (
    <div>
      {/* <div>{count}</div>
      <div>
        <button onClick={increase}>Arttır</button>
        <button onClick={decrease}>Azalt</button>
      </div> */}
      {/* {open && (
        <div
          style={{ width: "300px", height: "300px", backgroundColor: "pink" }}
        ></div>
      )}

      <button
        onClick={change}
        style={{ backgroundColor: "white", color: "black", marginTop: "15px" }}
      >
        {open ? "Gizle" : "Göster"}
      </button> */}
      {copied && "Kopyalandı"}
      <button onClick={copy}>Kopyala</button>
    </div>
  );
}

export default App;
