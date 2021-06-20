import { useState } from "react";
import HeaderComponent from "../../Components/Header"

export default function Header() {
    const [value, setValue] = useState("")

    const handleChangeInput = e => {
        setValue(e.target.value)
    }

    console.log("value", value)

    return (
        <HeaderComponent
            value={value}
            onChangeInput={handleChangeInput}
        />
    );
}