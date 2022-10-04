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
      <div>{e.InStock=="Out of Stock" ? <div id="ofs">Out of Stock</div> : e.InStock=="56" ? <div id="instock">In Stock : 56</div>: e.InStock=="5" ? <div id="low">Low Stock : 5</div>: ''}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
