import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./util/employee.json";
import Search from "./components/Search";
import "./components/App.css"

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        employees
    };



    // Map over this.state.friends and render a EmployeeCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Search></Search>
                <Title>Current Employees</Title>

                {this.state.employees.map(employee => (
                    <EmployeeCard

                        id={employee.id}
                        key={employee.id}
                        name={employee.name}
                        image={employee.image}
                        occupation={employee.occupation}
                        location={employee.location}
                        email={employee.email}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
