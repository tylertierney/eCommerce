import { useState } from "react";
import productData from "../data/ProductData";
import { ProductsContainerDiv } from "./StyledComponents";
import ProductCard from "./ProductCard";
import SortFilters from "./SortFilters";

const ProductsContainer = ({
  theme,
  cartItems,
  setCartItems,
  category,
  favoriteItems,
  setFavoriteItems,
  favoritesOrNot,
  isProductModalShowing,
  setProductModalShowing,
}) => {
  const [filterSelection, setFilterSelection] = useState("");
  const [isFiltering, setIsFiltering] = useState(false);

  const checkIfInFavorites = (item) => {
    let found = false;
    favoriteItems.forEach((product) => {
      if (item.id === product.id) {
        found = true;
      }
    });
    return found;
  };

  // This populates the horizontal track (productsContainer) with prodcuts DATA ITEMS (not DOM elements) if their category matches the section category

  let newProductData = [];
  if (favoritesOrNot === true) {
    [...productData].forEach((item) => {
      if (item.category === category) {
        if (checkIfInFavorites(item)) {
          newProductData.push(item);
        }
      }
    });
  } else {
    [...productData].forEach((item) => {
      if (item.category === category) {
        newProductData.push(item);
      }
    });
  }

  const findAverageRating = (ratings) => {
    let total = 0;
    let i;
    for (i = 0; i < ratings.length; i++) {
      total += ratings[i];
    }
    return total / ratings.length;
  };
  // This sorts the list of products in the category based on the selected sort value
  const sortProductList = (filter) => {
    if (filter === "rating") {
      newProductData.sort((a, b) => {
        let avgA = findAverageRating(a.ratings);
        let avgB = findAverageRating(b.ratings);
        return avgB - avgA;
      });
    }
    if (filter === "pricelow") {
      newProductData.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (filter === "pricehigh") {
      newProductData.sort((a, b) => {
        return b.price - a.price;
      });
    }
  };

  const toggleAddToFavorites = (e, index) => {
    e.stopPropagation();
    let newFavoriteItems = [...favoriteItems];
    if (newFavoriteItems.includes(newProductData[index])) {
      newFavoriteItems = newFavoriteItems.filter(
        (item) => item.id !== newProductData[index].id
      );
    } else {
      newFavoriteItems = [...newFavoriteItems, newProductData[index]];
    }
    setFavoriteItems(newFavoriteItems);
  };
  // This toggles in/out cart BASED ON THE DOM

  const toggleAddToCart = (e, index) => {
    e.stopPropagation();
    let newCartItems = [...cartItems];
    if (newCartItems.includes(newProductData[index])) {
      newCartItems = newCartItems.filter(
        (item) => item.id !== newProductData[index].id
      );
    } else {
      newCartItems = [...newCartItems, newProductData[index]];
    }
    setCartItems(newCartItems);
  };

  sortProductList(filterSelection);

  let productsList = [];

  newProductData.forEach((item, index) => {
    let addedToCart = false;
    let addedToFavorites = false;
    if (cartItems.includes(item)) {
      addedToCart = true;
    }
    if (favoriteItems.includes(item)) {
      addedToFavorites = true;
    }

    let productCard = (
      <ProductCard
        key={item.id}
        addedToCart={addedToCart}
        item={item}
        index={index}
        toggleAddToCart={toggleAddToCart}
        addedToFavorites={addedToFavorites}
        toggleAddToFavorites={toggleAddToFavorites}
        isProductModalShowing={isProductModalShowing}
        setProductModalShowing={setProductModalShowing}
      />
    );
    productsList.push(productCard);
  });

  return (
    <div className="productsContainer2">
      <SortFilters
        filterSelection={filterSelection}
        setFilterSelection={setFilterSelection}
        isFiltering={isFiltering}
        setIsFiltering={setIsFiltering}
        category={category}
      />
      <ProductsContainerDiv
        filterSelection={filterSelection}
        setFilterSelection={setFilterSelection}
        className="productsContainer"
      >
        {productsList}
      </ProductsContainerDiv>
    </div>
  );
};

export default ProductsContainer;
