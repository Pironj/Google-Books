import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Header";
import API from "../utils/API";


class SavedBooks extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">React Google Books Search</h1>
          <p className="lead">Here is a list of your saved books.</p>
        </Jumbotron>
      </div>
    );
  }

}

export default SavedBooks;