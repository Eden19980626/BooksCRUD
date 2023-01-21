import { useState } from 'react';
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className='input' value={title} onChange={handleChange} />
      <button className='btn'>儲存</button>
    </form>
  );
}
export default BookEdit;
