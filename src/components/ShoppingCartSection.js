import { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { StyledShoppingCart } from "./StyledComponents";
import SmallCartIndicator from "./SmallCartIndicator";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
const ShoppingCartSection = ({
  cartItems,
  setCartItems,
  cartIsShowing,
  setCartIsShowing
}) => {
  const [showCartNumber, setShowCartNumber] = useState(false);

  const removeFromCart = (index) => {
    let newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  let cartListArray = [];

  cartItems.forEach((item, index) => {
    cartListArray.push(
      <li className="cartListItem" key={index}>
        <div className="cartListItemContainer">
          <span className="cartItemName">{item.name}</span>
          <span className="cartItemPrice">${item.price}.00</span>
          <span
            className="cartItemRemoveBtn"
            onClick={() => removeFromCart(index)}
          >
            x
          </span>
        </div>
      </li>
    );
  });

  useEffect(() => {
    if (cartItems.length > 0) {
      setShowCartNumber(true);
    } else {
      setShowCartNumber(false);
    }
  }, [cartItems]);

  let cartNumberClass;
  showCartNumber === false
    ? (cartNumberClass = "hidden")
    : (cartNumberClass = "visible");

  const showOrHideShoppingCart = () => {
    setShowCartNumber(!showCartNumber);
    setCartIsShowing(!cartIsShowing);
  };

  let total = 0;
  cartItems.forEach((item) => {
    total += parseInt(item.price, 10);
  });

  return (
    <>
      {cartIsShowing ? (
        <div className="cartListContainer">
          <StyledShoppingCart className="cartListHeader">
            <span className="cartListHeaderText">Your Cart</span>
            <div
              className="cartListHeaderCloseBtn"
              onClick={() => showOrHideShoppingCart()}
            >
              <CloseIcon style={{ fontSize: "1.3rem" }} />
            </div>
          </StyledShoppingCart>
          {cartItems.length > 0 ? (
            <ol className="cartList">{cartListArray}</ol>
          ) : (
            <div
              className="cartList"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <SentimentVeryDissatisfiedIcon style={{ fontSize: "40px" }} />
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1rem"
                  }}
                >
                  There are no items in your cart.
                </p>
              </div>
            </div>
          )}
          {/* <ol className="cartList">{cartListArray}</ol> */}
          <li className="cartListTotal">
            <div style={{ paddingLeft: "20px" }}>
              <span style={{ fontWeight: 300 }}>Total:&nbsp;</span>
              <span style={{ fontWeight: 200 }}>${total}.00</span>
            </div>
            <button className="reviewOrderBtn">Review Order</button>
          </li>
        </div>
      ) : (
        <SmallCartIndicator
          cartItems={cartItems}
          cartNumberClass={cartNumberClass}
          showOrHideShoppingCart={() => showOrHideShoppingCart()}
        />
      )}
    </>
  );
};

export default ShoppingCartSection;
