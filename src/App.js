import { useState } from 'react';
import BookCreate from './components/BookCreate';
function App() {
  const [books, setBooks] = useState([]);
  const handleCreateBook = (title) => {
    console.log('新增一本書，叫做' + title);
  };
  return <BookCreate onCreate={handleCreateBook} />;
}

export default App;
