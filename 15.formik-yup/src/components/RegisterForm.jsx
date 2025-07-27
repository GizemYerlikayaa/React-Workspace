import React from "react";
import { useFormik } from "formik";

function RegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
  });

  return (
    <div>
      <form>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Emailinizi Giriniz"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            id="age"
            placeholder="Yaşınızı Giriniz"
            value={values.age}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi Giriniz"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <label>Şifre Tekrarı</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Şifrenizi Tekrar Giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="inputDiv">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <input
              style={{ width: "20px", height: "20px" }}
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label style={{ marginTop: "5px", marginLeft: "5px" }}>
              Kullanıcı Sözleşmesini Kabul Ediyorum
            </label>
          </div>
        </div>
        <button className="saveButton">Kaydet</button>
      </form>
    </div>
  );
}

export default RegisterForm;
