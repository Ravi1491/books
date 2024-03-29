import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BookContext from "../context/books";

const   BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { editBookById, deleteBookById} = useContext(BookContext);

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    editBookById(id, title);
  };

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200 `} />
      <div>
        {showEdit ? (
          <BookEdit book={book} onSubmit={handleSubmit} />
        ) : (
          <h3>{book.title}</h3>
        )}
      </div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(true)}>
          Edit
        </button>
        <button className="delete" onClick={() => deleteBookById(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
