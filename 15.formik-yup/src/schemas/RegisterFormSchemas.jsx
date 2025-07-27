import * as yup from "yup";

export const RegisterFormSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli Email Adresi Giriniz")
    .required("Email Adresi Zorunlu!"),
  age: yup
    .number()
    .positive("Pozitif Bir Değer Giriniz")
    .integer("Tam Sayı Giriniz")
    .required("Yaş Alanı Boş Geçilmez"),
  password: yup.string().required("Sifre Alanı Zorunlu"),
  confirmPassword: yup
    .string()
    .required("Şifre Tekrarı Zorunlu")
    .oneOf([yup.ref("password", yup.password)], "Şifreler Eşleşmiyor"),
  term: yup
    .boolean()
    .required("Kullanıcı Sözleşmesini Onaylamanız Zorunludur."),
});
