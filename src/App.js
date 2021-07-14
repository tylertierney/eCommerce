import "./styles.css";
import "./hamburgers.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import productData from "./data/ProductData";
import ShoppingCartSection from "./components/ShoppingCartSection";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import UserContext from "./UserContext";
import NavMenu from "./components/NavMenu";
import FavoritesPage from "./components/FavoritesPage";
import ProductModal from "./components/ProductModal";
import { StyledFooter } from "./components/StyledComponents";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import CreateAccountPage from "./components/CreateAccountPage";

const lightTheme = {
  body: "rgb(255, 227, 227)",
  fontColor: "#000",
  iconColor: "black",
  accent: "whitesmoke",
  accent2: "rgb(34, 44, 99)",
  borderColor: "rgb(34, 44, 99)",
  leftOrRight: "translateX(-10px);",
  shadow: "0px 2px 20px 4px rgb(218, 187, 187);",
  background: "rgba(245, 245, 245, 0.3);",
  userSelect: "none",
};

const darkTheme = {
  body: "rgb(34, 44, 99)",
  iconColor: "black",
  fontColor: "#fff",
  accent: "rgb(255, 227, 227)",
  accent2: "whitesmoke",
  borderColor: "black",
  leftOrRight: "translateX(10px);",
  shadow: "0px 2px 14px 0px rgb(34, 44, 99);",
  background: "rgb(190, 190, 190, 0.5)",
  userSelect: "none",
};

export default function App() {
  const [theme, setTheme] = useState("light");
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [cartIsShowing, setCartIsShowing] = useState(false);
  const [isNavmenuShowing, setNavmenuShowing] = useState(false);
  const [user, setUser] = useState(null);
  const [isProductModalShowing, setProductModalShowing] = useState(false);

  // let productmodal;
  // if (isProductModalShowing) {
  //   productmodal = (
  //     <ProductModal
  //       setCartItems={setCartItems}
  //       cartItems={cartItems}
  //       cartIsShowing={cartIsShowing}
  //       setCartIsShowing={setCartIsShowing}
  //       isProductModalShowing={isProductModalShowing}
  //       setProductModalShowing={setProductModalShowing}
  //     />
  //   );
  // }

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <Navbar
            theme={theme}
            setTheme={setTheme}
            isNavmenuShowing={isNavmenuShowing}
            setNavmenuShowing={setNavmenuShowing}
            cartIsShowing={cartIsShowing}
            setCartIsShowing={setCartIsShowing}
          />
          {isNavmenuShowing ? (
            <NavMenu
              isNavmenuShowing={isNavmenuShowing}
              setNavmenuShowing={setNavmenuShowing}
              cartIsShowing={cartIsShowing}
              setCartIsShowing={setCartIsShowing}
            />
          ) : (
            <></>
          )}
          <ProductModal />
          <Switch>
            <Route exact path="/">
              <HomePage
                productData={productData}
                cartItems={cartItems}
                setCartItems={setCartItems}
                favoriteItems={favoriteItems}
                setFavoriteItems={setFavoriteItems}
                isProductModalShowing={isProductModalShowing}
                setProductModalShowing={setProductModalShowing}
              />
            </Route>
            <Route path="/favorites">
              <FavoritesPage
                productData={productData}
                cartItems={cartItems}
                setCartItems={setCartItems}
                favoriteItems={favoriteItems}
                setFavoriteItems={setFavoriteItems}
                isProductModalShowing={isProductModalShowing}
                setProductModalShowing={setProductModalShowing}
              />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/createaccount">
              <CreateAccountPage />
            </Route>
          </Switch>
          <ShoppingCartSection
            setCartItems={setCartItems}
            cartItems={cartItems}
            cartIsShowing={cartIsShowing}
            setCartIsShowing={setCartIsShowing}
          ></ShoppingCartSection>
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </ThemeProvider>
      </UserContext.Provider>
    </Router>
  );
}
