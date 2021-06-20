import React from "react";

const Books = (props) => {
  //need to change it to table
  return (
    <div>
      <ul>
        <h2>Book List</h2>
        {props.bookList.map((book) => (
          <li key={book.id}>
            <button
              onClick={() => {
                props.deleteBook(book.id);
              }}
            >
              Delete book of "{book.name}"{" "}
            </button>
            <div>{book.name}</div>
            <div>Wiki Link:{book.bookUrl}</div>
            <div>Book description</div>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
