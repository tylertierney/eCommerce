import "./productModal.css";
import CloseIcon from "@material-ui/icons/Close";
import { StyledShoppingCart } from "./StyledComponents";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import productData from "../data/ProductData";

const ProductModal = ({
  name,
  price,
  img,
  id,
  images,
  category,
  rating,
  index,
  thisProductModalShowing,
  setThisProductModalShowing,
  canEdit,
  setCanEdit,
  starValue,
  setStarValue,
  toggleAddToCart,
  addedToCart,
}) => {
  const [mainImgIndex, setMainImgIndex] = useState(0);

  const changeImgIndex = (upOrDown) => {
    if (mainImgIndex === 0 && upOrDown === false) {
      setMainImgIndex(bigimagesArray.length - 1);
      return;
    }
    if (mainImgIndex === bigimagesArray.length - 1 && upOrDown === true) {
      setMainImgIndex(0);
      return;
    }
    upOrDown
      ? setMainImgIndex(mainImgIndex + 1)
      : setMainImgIndex(mainImgIndex - 1);
  };

  const hideProductModal = () => {
    setThisProductModalShowing(false);
  };

  let currentimage = 0;

  let smallimagesArray = [];
  let bigimagesArray = [];
  smallimagesArray.push(
    <div
      className="smallImageDivs"
      style={{ backgroundImage: `url(${img})` }}
    ></div>
  );
  bigimagesArray.push(img);
  if (images) {
    images.forEach((item) => {
      smallimagesArray.push(
        <div
          className="smallImageDivs"
          style={{ backgroundImage: `url(${item})` }}
        ></div>
      );
      bigimagesArray.push(item);
    });
  }

  let value = 0;

  const ratingChanged = (newRating) => {
    // if (canEdit === true) {
    let newProductData = [...productData];
    // productData[id].ratings.push(newRating);
    newProductData[id].ratings.push(newRating);
    setCanEdit(false);
    setStarValue(newRating);
    // }
  };

  let cartBtnText;
  addedToCart ? (cartBtnText = "Remove From") : (cartBtnText = "Add To");

  return thisProductModalShowing ? (
    <div className="productModalContainer" style={{ zIndex: "4" }}>
      <StyledShoppingCart className="productModalHeader">
        <span className="productModalHeaderText">{name}</span>
        <div
          className="productModalCloseBtn"
          onClick={() => hideProductModal()}
        >
          <CloseIcon style={{ fontSize: "1.3rem" }} />
        </div>
      </StyledShoppingCart>
      <div className="productModalBody">
        <div className="slideShowContainer">
          <div
            className="slideShowMainImgContainer"
            style={{
              backgroundImage: `url(${bigimagesArray[mainImgIndex]})`,
            }}
          >
            <button
              className="slideShowLeftBtn slideShowArrows"
              onClick={() => changeImgIndex(false)}
            >
              <ChevronLeftIcon style={{ fontSize: "3rem" }} />
            </button>
            <button
              className="slideShowRightBtn slideShowArrows"
              onClick={() => changeImgIndex(true)}
            >
              <ChevronRightIcon style={{ fontSize: "3rem" }} />
            </button>
          </div>
          <div className="slideShowSmallImageContainer">{smallimagesArray}</div>
          <StyledShoppingCart style={{ listStyleType: "none" }}>
            <div className="rateThisItemContainer">
              <p>Rate this item:</p>
              <ReactStars
                className="reactStars"
                isHalf={true}
                activeColor="#ffffff"
                size={32}
                style={{ outline: "none" }}
                // onChange={()=>ratingChanged}
                onChange={(newRating) => ratingChanged(newRating)}
                edit={canEdit}
                value={starValue}
              />
            </div>
          </StyledShoppingCart>
        </div>
      </div>
      <div className="productModalTotal">
        <div style={{ paddingLeft: "20px" }}>
          <span style={{ fontWeight: 300, fontSize: "1.5rem" }}>
            ${price}.00
          </span>
        </div>
        <button
          onClick={(e) => toggleAddToCart(e, index)}
          className="reviewOrderBtn"
          style={{ padding: "0 10px" }}
        >
          {`${cartBtnText} Cart`}
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ProductModal;
