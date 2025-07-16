import React from "react";

function Product(props) {
  const { productName, price } = props;
  return (
    <div>
      <div>ÜRÜN BİLGİLERİ</div>
      <div>
        {/* <div>İsim:{props.productName}</div>
        <div>Fiyat:{props.price}</div> */}

        <div>İsim:{productName}</div>
        <div>Fiyat:{price}</div>
      </div>
    </div>
  );
}

export default Product;

//! yani propsları 3 farklı şekilde kullanabiliriz.
// function Product({ productName, price }) {
//   return (
//     <div>
//       <div>ÜRÜN BİLGİLERİ</div>
//       <div>
//         {/* <div>İsim:{props.productName}</div>
//         <div>Fiyat:{props.price}</div> */}

//         <div>İsim:{productName}</div>
//         <div>Fiyat:{price}</div>
//       </div>
//     </div>
//   );
// }

// export default Product;
