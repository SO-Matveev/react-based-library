import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Book(props) {
  const { book } = props;
  return (
    <Card border="info">
      <Card.Body>
        <Card.Title>Книга: {book.title}</Card.Title>
        <Card.Text>Автор Книги: {book.author}</Card.Text>
        <Card.Img variant="top" src={book.imageUrl} style={{ maxWidth: 200 }} />
        <div>
          <Button className="me-2">Редактировать</Button>
          <Button className="me-2">Показать комментариии</Button>
          <Button variant="danger">Удалить</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Book;
