import Button from "react-bootstrap/Button";
function Book(props) {
  const { book } = props;
  return (
    <div>
      <h4>Книга: {book.title}</h4>
      <h5>Автор Книги: {book.author}</h5>
      <img src={book.imageUrl} alt="" />
      <Button className="me-2">Редактировать</Button>
      <Button className="me-2">Показать комментариии</Button>
      <Button variant="danger">Удалить</Button>
    </div>
  );
}
export default Book;
