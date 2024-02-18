import React, { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <>
      <div>Add a Book</div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default BookCreate;
