import React from "react";

function Course({ props }) {
  const { id, title, description, price, link, image } = props;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price}</h3>
        <a href={link} target="blank">
          Satın Almak İçin Tıklayınız
        </a>
      </div>
    </div>
  );
}

export default Course;
