import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import bookType from "../propTypes/propTypes";

class EditBookModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: props.book.title,
      author: props.book.author,
    };
    this.fileInputRef = React.createRef();
  }
  handleFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.setState({
      [fieldName]: fieldValue,
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAuthorChange = (event) => {
    this.setState({
      author: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author } = this.state;
    const data = { title, author, file: this.fileInputRef.current.files[0] };
    if (typeof this.props.onSubmit === "function") {
      this.props.onSubmit(data);
    }
    this.setState({
      title: "",
      author: "",
    });
  };
  render() {
    const { book, show, onHide } = this.props;
    const { title, author } = this.state;
    return (
      <Modal show={show} onHide={onHide}>
        <form onSubmit={this.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Редактирование книги</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-2">
              <input
                name="title"
                placeholder="Название книги"
                type="text"
                value={title}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="mb-2">
              <input
                name="author"
                placeholder="Автор книги"
                type="text"
                value={author}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="mb-2">
              <img src={book.imageUrl} alt="" style={{ maxWidth: 100 }} />
              <input type="file" ref={this.fileInputRef} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Отмена
            </Button>
            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}
EditBookModal.propTypes = {
  book: bookType.isRequired,
  show: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default EditBookModal;
