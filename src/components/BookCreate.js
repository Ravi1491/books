import React, { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          className="input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
