import "./App.css"
import Title from "./components/Title";
// import List from "./components/List";
import SearchBar from "./components/SearchBar"
import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import employees from "./util/employee.json";
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = {
    employees,
    filteredEmployees: [],
    search: "",
  };
  componentDidMount() {
    console.log(this.state)
  }
  searchEmployee = name => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.name !== name);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
    console.log(employees);
  };
  handleInputChange = event => {
    const employees = this.state.employees;
    console.log(employees);
    const Input = event.target.value;
    const filteredEmployees = employees.filter(employee => employee.name.toLowerCase().indexOf(Input.toLowerCase()) > -1
    )
    this.setState({
      filteredEmployees,
      employees: filteredEmployees,
    });
    console.log("filteredEmployees:", filteredEmployees)
  };

  sortByJob = () => {
    const filter = this.state.employees;
    console.log(filter);
    const order = filter.sort((a, b) => (a.occupation > b.occupation) ? -1 : 1)
    console.log(order)

    this.setState({
      filteredEmployees: order,
      // employees: filteredEmployees

    })
    console.log(this.state)
  }
  // resetSearch = event => {
  //   this.setState(
  //   {  employees: employees}
  //   )
  // }


  render() {
    return (
      <div className="App">
        <Wrapper>

          <SearchBar
            employee={this.state.employee}
            searchEmployee={this.searchEmployee}
            handleInputChange={this.handleInputChange}
          // handleInputChange={this.handleInputChange}
          />
          <button onClick={this.sortByJob}>Job</button>
          <Title>Current Employees</Title>
          {this.state.employees.map(employee => (
            <EmployeeCard
              sortByJob={this.sortByJob}

              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              location={employee.location}
            />
          ))}
        </Wrapper>
      </div>

    )
  }
}

export default App;