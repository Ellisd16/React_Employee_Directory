import React from "react";

function SearchForm(props) {
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