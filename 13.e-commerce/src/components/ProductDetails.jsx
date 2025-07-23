import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slices/productSlice";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slices/basketSlices";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);

  const { price, image, title, description } = selectedProduct;
  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };

    dispatch(addToBasket(payload));
    dispatch(calculateBasket());
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "50px" }}>
        <img src={image} style={{ width: "400px", height: "500px" }} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: "arial" }}>{title}</h1>
        <p style={{ fontFamily: "arial", fontSize: "20px" }}>{description}</p>
        <h1
          style={{
            fontFamily: "arial",
            fontSize: "50px",
            fontWeight: "bold",
            color: "orange",
          }}
        >
          {price} $
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CiCirclePlus
            onClick={increment}
            style={{ fontSize: "40px", marginRight: "5px", cursor: "pointer" }}
          />
          <span style={{ fontSize: "35px" }}>{count}</span>
          <CiCircleMinus
            onClick={decrement}
            style={{ fontSize: "40px", marginLeft: "5px", cursor: "pointer" }}
          />
        </div>
        <div>
          <button
            onClick={addBasket}
            style={{
              marginTop: "25px",
              border: "none",
              padding: "15px",
              backgroundColor: "orange",
              borderRadius: "5px",
              cursor: "pointer",
              fontFamily: "arial",
              color: "white",
            }}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetails;
