import { useContext } from "react";

import {Btap07} from "./components/Btap07"

function Button(){
    const {theme, toggleTheme} = useContext(Btap07)

    return (
        <button onClick={toggleTheme}>Current Theme: {theme} (Click to Change)</button>
    )
}

export default Button