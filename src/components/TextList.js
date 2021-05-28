import React from "react";

export default function TextList({ gifs }) {
  const items = gifs.map((item, index) => (
    <GifText key={index} url={item.url} />
  ));
  return <div className="row">{items}</div>;
}

const GifText = ({ url }) => (
  <div className="col-4">
    <img src={url} alt="" />
  </div>
);
