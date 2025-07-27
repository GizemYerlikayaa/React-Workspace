import React from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
  const submit = (values, action) => {
    setTimeout(() => {
      // Sanki veritabanına gitti ve kullanıcıyı kaydetti gibi bir izlenim sunmak için bu kodu ekledim.
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas,
    onSubmit: submit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="text"
            id="email"
            placeholder="Emailinizi Giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="inputError">{errors.email}</p>}
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
          {errors.age && <p className="inputError">{errors.age}</p>}
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
          {errors.password && <p className="inputError">{errors.password}</p>}
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
          {errors.confirmPassword && (
            <p className="inputError">{errors.confirmPassword}</p>
          )}
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
          {errors.term && <p className="inputError">{errors.term}</p>}
        </div>
        <button type="submit" className="saveButton">
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
