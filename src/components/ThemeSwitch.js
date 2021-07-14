import { StyledThemeBtn, StyledThemeTrack } from "./StyledComponents";
// import { useState } from "react";
import { Brightness3, WbSunny } from "@material-ui/icons";

const ThemeSwitch = ({ theme, setTheme }) => {
  const themeToggler = (e) => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  let themeicon;
  if (theme === "light") {
    themeicon = <WbSunny style={{ fontSize: 14 }} />;
  } else {
    themeicon = <Brightness3 style={{ fontSize: 14 }} />;
  }

  return (
    <div className="themeSwitch">
      <StyledThemeTrack className="themeTrack"></StyledThemeTrack>
      <StyledThemeBtn className="themeBtn" onClick={(e) => themeToggler(e)}>
        <div className="themeIcon">{themeicon}</div>
      </StyledThemeBtn>
    </div>
  );
};

export default ThemeSwitch;
