import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bookType from "../propTypes/propTypes";
import PropTypes from "prop-types";

function Book(props) {
  const { book, onDelete, onEdit } = props;
  return (
    <Card border="info">
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>Книга: {book.title}</Card.Title>
        <Card.Text>Автор Книги: {book.author}</Card.Text>
        <Card.Img variant="top" src={book.imageUrl} style={{ maxWidth: 200 }} />
        <div>
          <Button className="me-2" onClick={onEdit}>
            Редактировать
          </Button>
          <Button className="me-2">Показать комментариии</Button>
          <Button variant="danger" onClick={onDelete}>
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

Book.propTypes = {
  book: bookType.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Book;
