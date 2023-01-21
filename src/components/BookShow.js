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

  let content = <h3>{book.title}</h3>;
  content = showEdit ? <BookEdit onSubmit={handleSubmit} book={book} /> : null;

  return (
    <div>
      <div>{content}</div>
      <button className='btn' onClick={handleDeleteClick}>
        刪除
      </button>
      <button className='btn' onClick={handleEditClick}>
        編輯
      </button>
    </div>
  );
}
export default BookShow;
