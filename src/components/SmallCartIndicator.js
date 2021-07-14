const SmallCartIndicator = ({
  cartNumberClass,
  cartItems,
  showOrHideShoppingCart
}) => {
  return (
    <div onClick={showOrHideShoppingCart}>
      <p className={`currentItemsInCart ${cartNumberClass}`}>
        Cart:&nbsp;
        <span className="cartNumber">{cartItems.length}</span>
      </p>
    </div>
  );
};

export default SmallCartIndicator;
