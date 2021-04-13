import React, { useState } from "react";

function SearchForm(props) {
    const [employees, setEmployees] = useState([])
    const [search, setSearch] = useState("");

    function getResults() {
        const searchResult = employees.filter(employee => search.indexOf(employee.name.first) > -1 || search.indexOf(employee.name.last) > -1);
        console.log(searchResult);
        setEmployees(searchResult)
    }

    function clearForm() {
        setSearch("");

    }






    return (
        <form className="search">
            <div>
                <label>Search Here:</label>
                <input
                    /*here we'll pull the user's request*/
                    value={props.search}
                    onChange={props.handleInputChange}
                    placeholder="Search for a specific name, number, or email"

                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Search
            </button>
            </div>
        </form>
    );
}

export default SearchForm;