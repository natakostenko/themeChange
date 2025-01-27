import { useThemeContext } from "../context/useThemeContext";

const Footer = () => {
    const context = useThemeContext();
    const { theme } = context.stateData;
    const { common: commonStyles } = context[theme];

    return (
        <div className="footer base-class" style={commonStyles}>
            <h2>Footer</h2>
        </div>
    );
}

export default Footer;