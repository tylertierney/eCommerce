import { StyledProductCard } from "./StyledComponents";
import {
  AddShoppingCart,
  Stars,
  TextRotationAngleupSharp,
} from "@material-ui/icons";
import ReactStars from "react-rating-stars-component";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ProductModal from "./ProductModal";
import { useState, useEffect } from "react";

const ProductCard = ({
  toggleAddToCart,
  addedToCart,
  item,
  index,
  addedToFavorites,
  toggleAddToFavorites,
  isProductModalShowing,
  setProductModalShowing,
}) => {
  const [thisProductModalShowing, setThisProductModalShowing] = useState(false);
  const [canEdit, setCanEdit] = useState(true);
  const [starValue, setStarValue] = useState(0);

  let calculatedRating;

  let total = 0;
  let i;
  for (i = 0; i < item.ratings.length; i++) {
    total += item.ratings[i];
  }
  calculatedRating = total / item.ratings.length;

  let productmodal;
  if (thisProductModalShowing) {
    productmodal = (
      <ProductModal
        name={item.name}
        price={item.price}
        id={item.id}
        img={item.img}
        images={item.images}
        category={item.category}
        // rating={() => calculateRating(item.ratings)}
        rating={calculatedRating}
        index={index}
        thisProductModalShowing={thisProductModalShowing}
        setThisProductModalShowing={setThisProductModalShowing}
        canEdit={canEdit}
        setCanEdit={setCanEdit}
        starValue={starValue}
        setStarValue={setStarValue}
        toggleAddToCart={toggleAddToCart}
        addedToCart={addedToCart}
      />
    );
  }

  const createstars = (calculatedRating) => {
    let newcalculatedrating = calculatedRating;
    return (
      <div className="ratingStars">
        <ReactStars
          isHalf={true}
          activeColor="#ffffff"
          edit={false}
          // value={calculateRating(item.ratings)}
          value={newcalculatedrating}
        />
      </div>
    );
  };

  return (
    <>
      {productmodal}
      <StyledProductCard
        addedToCart={addedToCart}
        className="productCard"
        item={item}
        onClick={() => setThisProductModalShowing(true)}
      >
        <p className="productCardName">{item.name}</p>
        <div
          className="productCardImg productCardImgDiv"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          {createstars(calculatedRating)}
        </div>
        <div onClick={(e) => toggleAddToFavorites(e, index)}>
          {addedToFavorites ? (
            <FavoriteIcon
              className="favoriteIcon favoriteIconRed"
              style={{ fontSize: 18 }}
            />
          ) : (
            <FavoriteBorder className="favoriteIcon" style={{ fontSize: 18 }} />
          )}
          {/* <FavoriteBorder className="favoriteIcon" style={{ fontSize: 18 }} /> */}
        </div>
        <p className="productCardPrice">{`$${item.price}.00`}</p>
        <div
          className={addedToCart ? "inCart" : "notInCart"}
          onClick={(e) => toggleAddToCart(e, index)}
        >
          {/* <ShoppingCart className="cartIcon" style={{ fontSize: 18 }} /> */}
          <AddShoppingCart className="cartIcon" style={{ fontSize: 18 }} />
        </div>
      </StyledProductCard>
    </>
  );
};

export default ProductCard;
