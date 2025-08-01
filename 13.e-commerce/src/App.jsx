import { useEffect, useState } from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  calculateBasket,
  removeFromBasket,
  setDrawer,
} from "./redux/slices/basketSlices";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [products]);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          onClose={() => dispatch(setDrawer())}
          anchor="right"
          open={drawer}
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex-row" style={{ padding: "20px" }}>
                    <img
                      style={{ marginRight: "25px" }}
                      src={product.image}
                      width={50}
                      height={50}
                    />
                    <p style={{ width: "320px" }}>
                      {product.title}({product.count})
                    </p>
                    <p
                      style={{
                        fontWeight: "bold",
                        marginRight: "10px",
                        width: "60px",
                      }}
                    >
                      {product.price}${" "}
                    </p>
                    <button
                      onClick={() => dispatch(removeFromBasket(product.id))}
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "orange",
                        border: "none",
                        color: "white",
                        width: "35px",
                      }}
                    >
                      Sil
                    </button>
                  </div>
                </div>
              );
            })}
          <div>
            <p
              style={{
                textAlign: "end",
                marginRight: "35px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Toplam Tutar: {totalAmount} $
            </p>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
