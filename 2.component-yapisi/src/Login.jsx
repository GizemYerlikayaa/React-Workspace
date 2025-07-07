import React from "react";

export const users = [
  {
    username: "Gizem",
    password: "1",
  },
  {
    username: "Enes",
    password: "2",
  },
];

function Login() {
  return (
    <div>
      <div>
        <p>Kullanıcı Adınız</p>
        <input type="text" />
      </div>

      <div>
        <p>Sifreniz</p>
        <input type="text" />
      </div>

      <button>Giriş Yap</button>
    </div>
  );
}

export default Login;
