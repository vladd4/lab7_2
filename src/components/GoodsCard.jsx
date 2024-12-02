import React from "react";

export default function GoodsCard({ image, name, price }) {
  return (
    <div className="good-card">
      <img alt={name} src={image} />
      <h3>{name}</h3>
      <p>Price: {price} $</p>
    </div>
  );
}
