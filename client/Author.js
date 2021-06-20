const React = require("react");
const Axois = require("axios");

const Author = (props) => {
  return (
    <div class="author">
      <ul>
        <h2>Author List</h2>
        {props.authors.map((author) => (
          <li key={author.id}>
            <a
              onClick={() => {
                props.onClick(author.id);
              }}
            >
              <h3>{author.name}</h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Author;
