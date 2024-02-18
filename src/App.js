import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.random() * 9999, title }];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <div>Books: {books.length}</div>
      <BookCreate createBook={createBook} />
    </div>
  );
}

export default App;
