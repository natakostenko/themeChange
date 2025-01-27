import { THEME_VALUES } from "../constants";

const { LIGHT, DARK } = THEME_VALUES;

export const themeContextData = {
    [LIGHT]: {
        common: {
            borderColor: 'grey',
            background: 'silver',
            color: 'black',
        }
    },
    [DARK]: {
        common: {
            borderColor: 'black',
            background: 'grey',
            color: 'white',
        }
    }
}