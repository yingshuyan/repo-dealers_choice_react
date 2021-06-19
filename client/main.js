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

  render() {
    return (
      <div>
        {!this.state.bookListByAuthor.length ? (
          <Author
            authors={this.state.authors}
            onClick={this.bookListByAuthor}
          />
        ) : (
          <Books bookList={this.state.bookListByAuthor} />
        )}
        <Sidebar />
      </div>
    );
  }
}

export default Main;
