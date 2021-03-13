import React from "react";

//So here I'll be making the card to hold the employee information
//How should I do this?
//Create a div to begin with

function Card(props) {
    return <div className="card">
        <ul>
            <li>{props.picture.medium}</li>
            <li>{props.first}{props.last}</li>
            <li>{props.gender}</li>
        </ul>
    </div>
};
export default Card;