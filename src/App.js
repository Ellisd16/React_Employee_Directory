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
        employees,
        result: {},
        search: "",
    };
    searchEmployee = () => {
        employees.search()
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployee(this.state.search);
    };


    // Map over this.state.friends and render a EmployeeCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
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
