import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  box-shadow: ${(props) => props.theme.shadow};
`;

const StyledThemeBtn = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.iconColor};
  transform: ${(props) => props.theme.leftOrRight};
`;

const StyledThemeTrack = styled.div`
  background-color: ${(props) => props.theme.accent2};
  border-color: ${(props) => props.theme.borderColor};
`;

const StyledLogo = styled.span`
  color: ${(props) => props.theme.fontColor};
  user-select: ${(props) => props.theme.userSelect};
`;

const StyledProductCard = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
`;

const ProductsContainerDiv = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const SortFiltersDiv = styled.div`
  background-color: ${(props) => props.theme.background};
`;

const StyledShoppingCart = styled.li`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

// Don't change this hamburger icon, it works, even though sometimes it gets fucky and doesn't like to change colors
const StyledHamburgerIcon = styled.span`
  background-color: ${(props) => props.theme.fontColor};
  &:after,
  &:before {
    background-color: ${(props) => props.theme.fontColor};
  }
  &.is-active {
    background-color: ${(props) => props.theme.fontColor};
  }
`;

const StyledNavMenu = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const StyledPageHeader = styled.h2`
  background-color: ${(props) => props.theme.background};
`;

const StyledNavmenuUserLinkIcons = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

export {
  StyledNavbar,
  StyledThemeBtn,
  StyledThemeTrack,
  StyledLogo,
  StyledProductCard,
  ProductsContainerDiv,
  SortFiltersDiv,
  StyledShoppingCart,
  StyledHamburgerIcon,
  StyledNavMenu,
  StyledPageHeader,
  StyledNavmenuUserLinkIcons,
  StyledFooter,
};
