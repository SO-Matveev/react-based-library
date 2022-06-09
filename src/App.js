import React from "react";
import axios from "axios";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Book from "./components/Book";
import AddBookForm from "./components/AddBookForm";
import BookDeleteConfirmation from "./components/BookDeleteConfirmation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      isDeleteModalActive: false,
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
    const { title, author, file } = data;
    const formData = new FormData();
    formData.append("author", author);
    formData.append("title", title);
    formData.append("cover", file);

    axios
      .post("https://nordic-books-api.herokuapp.com/books", formData)
      .then((res) => res.json)
      .then((data) => {
        this.getBooks();
      });
  };
  handleBookDelete = (bookId) => {
    this.setState({
      isDeleteModalActive: true,
      bookId,
    });
  };
  handleDeleteModalHide = () => {
    this.setState({
      isDeleteModalActive: false,
    });
  };
  handleDeleteConfirm = () => {
    const { bookId } = this.state;
    axios
      .delete(`https://nordic-books-api.herokuapp.com/books/${bookId}`)
      .then(() => {
        this.handleDeleteModalHide();
        this.getBooks();
      });
  };

  render() {
    const { isDeleteModalActive } = this.state;
    return (
      <div className="container">
        <h1>Электронная библиотека</h1>
        <AddBookForm onSubmit={this.handleBookSubmit} />
        <Row xs={1} md={3} xl={4}>
          {this.state.books.map((book) => (
            <Col key={book._id} className="d-flex">
              <Book
                book={book}
                onDelete={() => this.handleBookDelete(book._id)}
              />
            </Col>
          ))}
        </Row>
        <BookDeleteConfirmation
          show={isDeleteModalActive}
          onHide={this.handleDeleteModalHide}
          onConfirm={this.handleDeleteConfirm}
        />
      </div>
    );
  }
}

export default App;
