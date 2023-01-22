import { useState, useContext } from 'react';
import BooksContext from '../context/books';
function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div>
      <form className='p-5 flex justify-center gap-3' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='輸入想新增的書'
          className='input w-full max-w-xs input-bordered'
          value={title}
          onChange={handleChange}
        />
        <button className='btn btn-secondary'>新增書本</button>
      </form>
    </div>
  );
}
export default BookCreate;
