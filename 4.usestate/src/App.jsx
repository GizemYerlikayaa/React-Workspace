import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("Ela");
  // const [lastName, setLastName] = useState("SU");
  // const [names, setnames] = useState(["Gizem", "Enes", "Ela", "Zehra"]);
  // const [userInfo, setUserInfo] = useState({
  //   username: "ebeyram",
  //   password: "123456",
  // });
  // const [show, setShow] = useState(true);

  // Bir state'in değerini set methodunu kullanarak değiştirdiğinde component yeniden render edilir.
  const [count, setCount] = useState(0);
  const arttir = () => {
    setCount(count + 1);
  };
  const azalt = () => {
    if (count > 0) setCount(count - 1);
  };
  console.log("component render edildi");

  return (
    <>
      <div>
        {/* <div>{firstName}</div>
        <div>
          <button
            onClick={() => {
              setFirstName("Gizem");
            }}
          >
            İsmi Değiştir
          </button>
        </div> */}
        {/* {names.map((name, index) => (
          <div key={index}>{name} </div>
        ))} */}
        {/* {userInfo.username} {userInfo.password} */}
        {/* {show ? (
          <div>
            {userInfo.username} {userInfo.password}
          </div>
        ) : (
          <div>Bilgileri Gösterme </div>
        )} */}
        <div>{count}</div>
        <div>
          <button onClick={arttir}>"Arttır"</button>
          <button onClick={azalt}>"Azalt"</button>
        </div>
      </div>
    </>
  );
}

export default App;
