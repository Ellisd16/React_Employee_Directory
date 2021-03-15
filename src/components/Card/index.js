import React from "react";
import "./style.css";
//So here I'll be making the card to hold the employee information


function Card(props) {
    return <div className="card">
        <ul>
            <li><img alt={props.last} src={props.image.medium}></img></li>
            <li>{props.first}{props.last}</li>
            <li>{props.gender}</li>
            <li>{props.phone}</li>
            <li>{props.email}</li>

        </ul>
    </div>
};
export default Card;