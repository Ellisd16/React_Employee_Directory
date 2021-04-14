import React from "react";


function EmployeeCard(props) {
    return (
        <div className="card">
            <button onClick={props.sortByJob}>Job</button>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Location:</strong> {props.location}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;
