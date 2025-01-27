import { useThemeContext } from "../context/useThemeContext";

const Main = () => {
    const context = useThemeContext();
    const { theme } = context.stateData;
    const { common: commonStyles } = context[theme];

    return (
        <div className="main base-class" style={commonStyles}>
            <h1>Main</h1>
        </div>
    );
}

export default Main;