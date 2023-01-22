import useBooksContext from '../hooks/use-books-context';
import { useState } from 'react';
import BookEdit from './BookEdit';
function BookShow({ book }) {
  const { deleteBookById } = useBooksContext;
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    deleteBookById(book.id);
  }

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  function handleSubmit() {
    setShowEdit(false);
  }

  let content = <h3 className='card-title'>{book.title}</h3>;

  content = showEdit ? (
    <BookEdit onSubmit={handleSubmit} book={book} />
  ) : (
    content
  );

  return (
    <div className='shadow-xl card w-96 bg-base-100'>
      <figure className='px-10 pt-10'>
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt='books'
          className='border-2 rounded-xl'
        />
      </figure>
      <div className='items-center gap-10 text-center card-body'>
        {content}
        <div className='btn-group'>
          <button className='btn btn-active' onClick={handleEditClick}>
            修改
          </button>
          <button className='btn' onClick={handleDeleteClick}>
            刪除
          </button>
        </div>
      </div>
    </div>
  );
}
export default BookShow;
