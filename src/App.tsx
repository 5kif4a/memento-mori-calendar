import { Calendar } from "components";
import { FC } from "react";

const defaultBirthdate = "2000-01-01";
const defaultAge = "90";

const App: FC = () => {
    const getQueryParams = () => {
        const params = new URLSearchParams(window.location.search);
        const birthdate = params.get("birthdate") || defaultBirthdate;
        const age = parseInt(params.get("age") || defaultAge, 10);
        return { birthdate, age };
    };

    const { birthdate, age } = getQueryParams();

    return <Calendar birthdate={birthdate} age={age} />;
};

export default App;
