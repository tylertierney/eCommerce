import ProductsContainer from "./ProductsContainer";
import "./favoritesPage.css";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { StyledPageHeader } from "./StyledComponents";

const FavoritesPage = ({
  productData,
  cartItems,
  setCartItems,
  favoriteItems,
  setFavoriteItems,
  isProductModalShowing,
  setProductModalShowing,
}) => {
  // This creates Product Containers (the horizontal tracks) for each unique category in the product data
  let productCategoryArray = [];
  favoriteItems.forEach((item) => {
    productCategoryArray.push(item.category);
  });
  console.log(favoriteItems);
  let uniqueProductContainerArray = new Set(productCategoryArray);
  let productContainerArray = [];
  uniqueProductContainerArray.forEach((item, index) => {
    productContainerArray.push(
      <ProductsContainer
        category={item}
        cartItems={cartItems}
        setCartItems={setCartItems}
        favoriteItems={favoriteItems}
        setFavoriteItems={setFavoriteItems}
        key={index}
        favoritesOrNot={true}
        isProductModalShowing={isProductModalShowing}
        setProductModalShowing={setProductModalShowing}
        // theme={theme === "light" ? lightTheme : darkTheme}
      />
    );
  });
  return (
    <>
      {favoriteItems.length > 0 ? (
        <div>
          <StyledPageHeader className="pageHeader">Favorites</StyledPageHeader>
          <div className="favoritesPage">{productContainerArray}</div>
        </div>
      ) : (
        <div className="noFavoritesText">
          <h2>You have no favorites.</h2>
          <p>
            Click the&nbsp;
            <span>
              <FavoriteBorder className="favoriteIconInlineText" />
            </span>
            &nbsp;icon to add a product to your favorites.
          </p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
