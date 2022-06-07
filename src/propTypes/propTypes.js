import PropTypes from "prop-types";
import Book from "../components/book";
import AddBookForm from "../components/addBookForm";

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

AddBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
