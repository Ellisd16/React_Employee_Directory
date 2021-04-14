import React from "react";
import EmployeeCard from "../EmployeeCard"

function List({ data }) {
    return (
        data.map(employee => (
            <EmployeeCard

                id={employee.id}
                key={employee.id}
                name={employee.name}
                image={employee.image}
                occupation={employee.occupation}
                location={employee.location}
            />
        ))

    )
}
export default List;