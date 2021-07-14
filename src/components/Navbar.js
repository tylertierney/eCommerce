import { StyledNavbar, StyledLogo } from "./StyledComponents";
import ThemeSwitch from "./ThemeSwitch";
import { StyledHamburgerIcon } from "./StyledComponents";
import { Link } from "react-router-dom";

const Navbar = ({
  theme,
  setTheme,
  setNavmenuShowing,
  isNavmenuShowing,
  cartIsShowing,
  setCartIsShowing,
}) => {
  let hamburgerClass;

  const showOrHideNavmenu = () => {
    if (cartIsShowing) {
      setCartIsShowing(!cartIsShowing);
    }
    setNavmenuShowing(!isNavmenuShowing);
  };

  isNavmenuShowing ? (hamburgerClass = "is-active") : (hamburgerClass = "");

  const hideModalsOnLogoClick = () => {
    setCartIsShowing(false);
    setNavmenuShowing(false);
  };

  return (
    <StyledNavbar value="hello" className="navBar">
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <StyledLogo className="logo" onClick={() => hideModalsOnLogoClick()}>
          {/* <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        > */}
          LOGO
          {/* </Link> */}
        </StyledLogo>
      </Link>
      <ThemeSwitch theme={theme} setTheme={setTheme} />
      <div theme={theme} className="hamburgerContainer">
        <button
          onClick={() => {
            showOrHideNavmenu();
          }}
          className={`hamburger--spin hamburger2 ${hamburgerClass}`}
          type="button"
          style={{
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <span className="hamburger-box">
            <StyledHamburgerIcon className="hamburger-inner"></StyledHamburgerIcon>
          </span>
        </button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
