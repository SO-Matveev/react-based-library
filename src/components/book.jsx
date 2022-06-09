import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import bookType from "../propTypes/propTypes";
import PropTypes from "prop-types";

function Book(props) {
  const { book, onDelete } = props;
  return (
    <Card border="info">
      <Card.Body>
        <Card.Title>Книга: {book.title}</Card.Title>
        <Card.Text>Автор Книги: {book.author}</Card.Text>
        <Card.Img variant="top" src={book.imageUrl} style={{ maxWidth: 200 }} />
        <div>
          <Button className="me-2">Редактировать</Button>
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
};

export default Book;
