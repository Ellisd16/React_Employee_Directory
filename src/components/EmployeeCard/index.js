import React from "react";
import "./index.css";


function EmployeeCard(props) {
    return (
        <div id="containter">


            <div className="card">

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
        </div>

    );
}

export default EmployeeCard;
