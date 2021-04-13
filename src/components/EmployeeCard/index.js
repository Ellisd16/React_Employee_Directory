import React from "react";


function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <table>
                    <tr>

                        <th>
                            Name
                        </th>
                        <th>
                            Occupation
                        </th>
                        <th>
                            Location
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                    <tr>

                        <td>{props.name}</td>
                        <td>{props.occupation}</td>
                        <td>{props.location}</td>
                        <td>{props.email}</td>
                    </tr>

                </table>
            </div>
        </div>
    );
}

export default EmployeeCard;
