import { useThemeContext } from "../context/useThemeContext.js";
import BtnThemeToggle from "./BtnThemeToggle.jsx";


const Header = () => {
    const context = useThemeContext();
    const {theme} = context.stateData;
    const {common: commonStyles} = context[theme];

    return (
        <div className="header base-class" style={commonStyles}>
            <BtnThemeToggle />
        </div>
    );
}

export default Header;