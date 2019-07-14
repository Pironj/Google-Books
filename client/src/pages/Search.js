import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Header";
import SearchForm from "../components/Form/SearchForm";
import GoogleAPI from "../utils/GoogleAPI";
import { Col, Row, Container } from "../components/Grid";


// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// let query = 

class Search extends Component {
  state = {
    result: [],
    search: ""
  };

  // Search function that uses our Google query string and 
  searchBooks = query => {
    GoogleAPI.search(query)
    // console.log(query)
      .then(res => {
        // console.log(res.data.items);
        this.setState({ result: res.data.items })
        console.log(this.state.result)
      })
      .catch(err => console.log(err));
      // console.log(this.state.result);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // TODO Make google api call to return books
    this.searchBooks(this.state.search);
    console.log(this.state.search);
  };



  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">React Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
          <div className="container">
            <SearchForm 
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </Jumbotron>
        <Row>
          <Container fluid>
            <Col size="md-3">
            </Col>
          </Container>
        </Row>
      </div>
    );
  }
}
export default Search;