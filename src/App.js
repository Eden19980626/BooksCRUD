import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const responses = await axios.get('http://localhost:3001/books');
    setBooks(responses.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const handleCreateBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    console.log(response);
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate onCreate={handleCreateBook} />
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
