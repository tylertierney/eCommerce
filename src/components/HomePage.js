import ProductsContainer from "./ProductsContainer";
import { StyledPageHeader } from "./StyledComponents";

const HomePage = ({
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
  productData.forEach((item) => {
    productCategoryArray.push(item.category);
  });
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
        isProductModalShowing={isProductModalShowing}
        setProductModalShowing={setProductModalShowing}
        // theme={theme === "light" ? lightTheme : darkTheme}
      />
    );
  });
  return (
    <>
      <div>
        <StyledPageHeader className="pageHeader">For You</StyledPageHeader>
        <div className="favoritesPage">{productContainerArray}</div>
      </div>
      {/* <div className="homePage">{productContainerArray}</div> */}
    </>
  );
};

export default HomePage;
