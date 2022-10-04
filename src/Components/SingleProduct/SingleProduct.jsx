import React from "react";
import "./Singleproduct.css";

const SingleProduct = ({ e }) => {
  return (
    <div id="singlemain">
      <div id="imgdiv">
        <img src={e.img} alt="" />
      </div>

      <div id="sidediv">

      <div id="title">
        <div>{e.Title}</div>
        <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
      </div>
      <div>{e.Description}</div>
      <div id="price">
        <div id="cutprice">{e.CutPrice}</div>
        <div id="modifiedprice">{e.Price}</div>
      </div>
      <div>Stock :{e.InStock}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
