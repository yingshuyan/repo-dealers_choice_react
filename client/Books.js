import React from "react";

const Books = (props) => {
  //need to change it to table
  return (
    <div>
      Book List
      <ul>
        {props.bookList.map((book) => (
          <li key={book.id}>
            <div>Book name:{book.name}</div>
            <div>Wiki Link:{book.bookUrl}</div>
            Book description
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
