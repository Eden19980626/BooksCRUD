import { useState } from 'react';
import BookEdit from './BookEdit';
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  function handleDeleteClick() {
    onDelete(book.id);
  }

  function handleEditClick() {
    setShowEdit(!showEdit);
  }

  function handleSubmit(id, newTitle) {
    onEdit(id, newTitle);
    setShowEdit(false);
  }

  let content = <h3 className='card-title'>{book.title}</h3>;
  content = showEdit ? (
    <BookEdit onSubmit={handleSubmit} book={book} />
  ) : (
    content
  );

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`}
          alt='books'
          className='rounded-xl border-2'
        />
      </figure>
      <div className='card-body gap-10 items-center text-center'>
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
