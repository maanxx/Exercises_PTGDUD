import {useContext} from "react"
import {Btap07} from "./components/Btap07"
import Button from "./Button"


function Card() {
    const {theme} = useContext(Btap07)

    const style = {
        padding: '20px',
        margin: '20px',
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff"
    }


    return (
        <div style={style}>
            <h2>Card Component</h2>
            <Button/>
        </div>
    )
}

export default Card