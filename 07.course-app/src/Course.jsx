import React from "react";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <h5>{description}</h5>
        <h3>{price} ₺</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Satın Almak İçin Tıklayınız
        </a>
      </div>
    </div>
  );
}

export default Course;
