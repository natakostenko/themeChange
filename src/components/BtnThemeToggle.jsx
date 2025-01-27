import { THEME_VALUES } from "../constants";
import { useThemeContext } from "../context/useThemeContext";

const BtnThemeToggle = () => {
    const {stateData} = useThemeContext();
    const { theme, setTheme } = stateData;

    const {LIGHT, DARK} = THEME_VALUES;

    const btnToggleThemeText = theme === LIGHT ? 'dark' : 'light';

    const clickHandler = () => {
        setTheme(prev => prev === LIGHT ? DARK : LIGHT);
    }


    return (
        <button
            onClick={clickHandler}
            className="toggle-theme"
        >
            {btnToggleThemeText}
        </button>
    )
}

export default BtnThemeToggle;