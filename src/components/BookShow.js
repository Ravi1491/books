import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  };

  const content = <h3>{book.title}</h3>;

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleSubmit = (id, title) => {
    setShowEdit(false);
    onEdit(id, title);
  };

  return (
    <div className="book-show">
      {showEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : content}
      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
