import BookShow from './BookShow';
function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return (
    <div className='artboard-demo flex-row flex-wrap gap-5 p-10 m-10'>
      {renderedBooks}
    </div>
  );
}
export default BookList;
