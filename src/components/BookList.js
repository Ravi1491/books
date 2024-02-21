import React, { useContext } from "react";
import BookShow from "./BookShow";
import BookContext from "../context/books";

const BookList = ({}) => {
  const { books } = useContext(BookContext);

  const renderBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="book-list">{renderBooks}</div>;
};

export default BookList;
