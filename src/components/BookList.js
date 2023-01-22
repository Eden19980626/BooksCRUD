import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';

function BookList() {
  const { books } = useBooksContext();

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return (
    <div className='flex-row flex-wrap gap-5 p-10 m-10 artboard-demo'>
      {renderedBooks}
    </div>
  );
}
export default BookList;
