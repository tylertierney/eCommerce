import { useContext } from "react";
import UserContext from "../UserContext";
import { ShoppingCart } from "@material-ui/icons";
import FavoriteIcon from "@material-ui/icons/Favorite";
import login from "./login";
import { StyledNavMenu, StyledNavmenuUserLinkIcons } from "./StyledComponents";
import { Link } from "react-router-dom";

const NavMenu = ({
  cartIsShowing,
  setCartIsShowing,
  isNavmenuShowing,
  setNavmenuShowing,
}) => {
  const { user, setUser } = useContext(UserContext);

  const loginUser = () => {
    const user = login();
    setUser(user);
  };

  const showOrHideShoppingCart = () => {
    setCartIsShowing(!cartIsShowing);
    setNavmenuShowing(!isNavmenuShowing);
  };

  const showOrHideNavmenu = () => {
    setNavmenuShowing(!isNavmenuShowing);
  };

  let userinfo = JSON.parse(user);

  return (
    <div className="navMenuDropdown">
      <ul className="navMenuUL">
        {user ? (
          <StyledNavMenu>
            <li className="navMenuUserLI">
              <div>
                <p>{userinfo.username}</p>
              </div>
              <div>
                <div
                  className="navMenuUserLinks"
                  onClick={() => showOrHideShoppingCart()}
                >
                  <ShoppingCart className="navMenuUserLinkIcons" />
                  <p>Cart</p>
                </div>

                <StyledNavmenuUserLinkIcons
                  className="navMenuUserLinks"
                  onClick={() => showOrHideNavmenu()}
                >
                  <Link
                    to="/favorites"
                    className="navMenuUserLIasAnchorTag"
                    style={{
                      color: "inherit",
                      transitionDuration: "0.3s",
                    }}
                  >
                    <FavoriteIcon className="navMenuUserLinkIcons" />
                    <p>Favorites</p>
                  </Link>
                </StyledNavmenuUserLinkIcons>
              </div>
            </li>
          </StyledNavMenu>
        ) : (
          <StyledNavMenu>
            <li className="navMenuUserLI">
              <div className="signInLI" onClick={() => loginUser()}>
                <p>Log In</p>
              </div>
            </li>
          </StyledNavMenu>
        )}
        <li className="navMenuLI">About</li>
        {user ? (
          <li className="navMenuLI" onClick={() => setUser(null)}>
            Log Out
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default NavMenu;
