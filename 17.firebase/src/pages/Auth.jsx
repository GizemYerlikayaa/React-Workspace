import React from "react";

function Auth() {
  return (
    <div className="auth">
      <h3 className="auth-header">Giriş Yap / Kayıt Ol</h3>
      <div className="input-div">
        <input type="text" placeholder="E-mail Adres" />
        <input type="password" placeholder="Şifre" />
      </div>
      <div>
        <button className="login-button">Giriş Yap</button>
        <button className="register-button">Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Auth;
