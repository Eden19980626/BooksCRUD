import { useState } from 'react';
import BookCreate from './components/BookCreate';
function App() {
  const [books, setBooks] = useState([]);
  const handleCreateBook = (title) => {
    const updatedBooks = [...books, title];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
