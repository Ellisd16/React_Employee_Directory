import React from "react";
import "./style.css";
//So here I'll be making the card to hold the employee information


function Card(props) {
    return <div className="card">
        <ul>
            <li>{props.picture.medium}</li>
            <li>{props.first}{props.last}</li>
            <li>{props.gender}</li>
            <li>{props.phone}</li>
            <li>{props.email}</li>

        </ul>
    </div>
};
export default Card;