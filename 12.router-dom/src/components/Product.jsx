import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price } = product;

  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "40px", backgroundColor: "lightblue" }}>
      <div>Ürün Detayı</div>
      <h3>İsim:{name}</h3>
      <h3>Fiyat:{price}</h3>
      <button onClick={() => navigate("/product-details/" + id)}>
        Ürün Detayı
      </button>
    </div>
  );
}

export default Product;
