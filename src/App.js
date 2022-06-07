import React from "react";
import axios from "axios";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <div className="container">
        <h1>Электронная библиотека</h1>
        <AddBookForm onSubmit={this.handleBookSubmit} />
        {/* {this.state.books.map((book) => (
          <div key={book._id} className="mb-2">
            <Book book={book} />
          </div>
        ))} */}
        <Row xs={1} md={3} xl={4}>
          {this.state.books.map((book) => (
            <Col key={book._id}>
              <Book book={book} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
