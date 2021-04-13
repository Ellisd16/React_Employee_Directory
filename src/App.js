import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "../src/components/Card"
import SearchForm from "../src/components/Search";
import Header from "../src/components/Header";
// import API from "../src/util/API";

//Ok so what do I need to import from here

//On this page, I am building the main page
//i need to import my : {header, search bar, and employee list}
// Maybe I should start from there, and work my way up

//I need to make the API call on here
class App extends Component {
    state = {
        employees: [],
    }

    // componentDidMount() {
    //     API.getRandomUsers()
    //         .then(res => this.setState({ employees: res.data.results }))
    //         .catch(err => console.log(err))
    // }
    // //I need to create a handlesubmitform function on here
    // handleInputChange = event => {
    //     this.setState({ search: event.target.value });
    // };
    // //Here I'll render the page
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     Api
    // }
    render() {
        return (
            <div>
                <Wrapper>
                    <Header />
                    <SearchForm />
                    <Card />
                </Wrapper>
            </div>
        )
    }
}


export default App;