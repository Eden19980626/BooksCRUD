import useBooksContext from '../hooks/use-books-context';
import { useState } from 'react';
function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext;
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
      <form className='flex justify-center gap-3 p-5' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='輸入想新增的書'
          className='w-full max-w-xs input input-bordered'
          value={title}
          onChange={handleChange}
        />
        <button className='btn btn-secondary'>新增書本</button>
      </form>
    </div>
  );
}
export default BookCreate;
