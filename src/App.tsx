import { Calendar } from "components";
import { FC } from "react";

const defaultBirthdate = "2000-01-01";
const defaultAge = "90";
const defaultBgColor = "fff8dc";
const defaultColor = "2a2a2a";

const isHexColor = (color: string) => {
    const hexColorPattern = /^[0-9a-fA-F]{6}$/;
    return hexColorPattern.test(color);
};

const App: FC = () => {
    const getQueryParams = () => {
        const params = new URLSearchParams(window.location.search);
        const birthdate = params.get("birthdate") || defaultBirthdate;
        const age = parseInt(params.get("age") || defaultAge, 10);

        let bgColor = params.get("bgColor") || defaultBgColor;
        bgColor = isHexColor(bgColor) ? `#${bgColor}` : bgColor;

        let color = params.get("color") || defaultColor;
        color = isHexColor(color) ? `#${color}` : color;

        return { birthdate, age, bgColor, color };
    };

    const { birthdate, age, bgColor, color } = getQueryParams();

    return (
        <div
            className="app"
            style={{
                backgroundColor: bgColor,
            }}
        >
            <Calendar birthdate={birthdate} age={age} color={color} />
        </div>
    );
};

export default App;
