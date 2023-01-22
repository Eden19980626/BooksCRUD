import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2'>
      <input
        className='input input-primary'
        value={title}
        onChange={handleChange}
      />
      <button className='btn btn-primary'>儲存</button>
    </form>
  );
}
export default BookEdit;
