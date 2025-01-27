import { createContext, useState } from "react";
import { themeContextData } from "./themeContextData";
import { THEME_VALUES } from "../constants";

export const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const {children} = props;

  const {LIGHT} = THEME_VALUES;
  const [theme, setTheme] = useState(LIGHT);

  const contextData = {
    ...themeContextData,
    stateData: {theme, setTheme}
  }

  return (
    <ThemeContext.Provider value={contextData}>
      {
        children
      }
    </ThemeContext.Provider>
  )
}


export default ThemeProvider;

