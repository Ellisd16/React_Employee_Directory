import React from "react";

function SearchBar(props) {
    return (
        <div className="container">


            <header >

                <h3 className="title">Employee List</h3>


                <div className="inputField ">

                    <input
                        onChange={props.handleInputChange}
                        value={props.value}
                        id="employees"
                        type="text"
                        name="search"
                        list="employee"
                        className=" inputBox  "
                        placeholder="Search by name" />

                    <button
                        type="submit"
                        value=""
                        className=" btn z-depth-2 waves-effect  searchBttn"
                        onClick={props.searchEmployee} >Search</button>
                </div>

            </header>
        </div >
    )
}
export default SearchBar;