import React from "react";
import axios from "axios";
import "./App.css";
import Book from "./components/book";
import AddBookForm from "./components/addBookForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    this.getBooks();
  }
  getBooks = () => {
    axios.get("https://nordic-books-api.herokuapp.com/books").then((res) => {
      this.setState({
        books: res.data.data,
      });
    });
  };
  handleBookSubmit = (data) => {
    const { title, author } = data;
    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    axios
      .post("https://nordic-books-api.herokuapp.com/books", formData)
      .then((res) => res.json)
      .then((data) => {
        this.getBooks();
      });
  };
  render() {
    return (
      <div class="container">
        <h1>Электронная библиотека</h1>
        <AddBookForm onSubmit={this.handleBookSubmit} />
        {this.state.books.map((book) => (
          <div key={book._id} className="mb-2">
            <Book book={book} />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
