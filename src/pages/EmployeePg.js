import React, { Component } from "react";
import Container from "../components/Container/index";
import Card from "../components/Card/index"
import SearchForm from "../components/Search";
import Header from "../components/Header/index";
import API from "../util/API";

//Ok so what do I need to import from here

//On this page, I am building the main page
//i need to import my : {header, search bar, and employee list}
// Maybe I should start from there, and work my way up

class EmployeePg extends Component {

    //I need to create a handlesubmitform function on here

    //Here I'll render the page
    render() {
        return (
            <div>
                <Container>
                    <Header></Header>
                    <SearchForm>

                    </SearchForm>
                    <Card></Card>
                </Container>
            </div>
        )
    }
}
export default EmployeePg;