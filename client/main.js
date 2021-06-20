import React from "react";
import axios from "axios";
import Sidebar from "./sidebar";
import Author from "./Author";
import Books from "./Books";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      bookListByAuthor: [],
    };
    this.bookListByAuthor = this.bookListByAuthor.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({ bookListByAuthor: [] });
  }

  async componentDidMount() {
    const response = await axios.get("/api/authors");
    const authors = response.data;
    this.setState({ authors });
  }

  async bookListByAuthor(id) {
    const response = await axios.get(`api/authors/${id}`);
    const bookList = response.data;
    this.setState({ bookListByAuthor: bookList });
  }

  async deleteBook(id) {
    const response = await axios.delete(`api/books/${id}`);
    const renewedBookList = this.state.bookListByAuthor.filter(
      (ele) => ele.id !== id
    );
    this.setState({ bookListByAuthor: renewedBookList });
  }

  render() {
    return (
      <div>
        {!this.state.bookListByAuthor.length ? (
          <Author
            authors={this.state.authors}
            onClick={this.bookListByAuthor}
          />
        ) : (
          <Books
            deleteBook={this.deleteBook}
            bookList={this.state.bookListByAuthor}
          />
        )}
        {this.state.bookListByAuthor[1] && (
          <Sidebar backToAuthor={this.reset} />
        )}
      </div>
    );
  }
}

export default Main;
