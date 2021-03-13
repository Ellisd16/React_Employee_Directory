import "./header.css";
import React from "react";

function Header() {
    return (
        <div className="header" style={{ backgroundColor: "royalblue" }}>
            <h1>Employee Directory</h1>
            <h2>Use the search bar below to sort through the employee roster!</h2>
        </div>
    )
}
export default Header;