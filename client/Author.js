const React = require("react");
const Axois = require("axios");

const Author = (props) => {
  return (
    <h2>
      {" "}
      Author List{" "}
      {props.authors.map((author) => (
        <div key={author.id}>
          <a
            onClick={() => {
              props.onClick(author.id);
            }}
          >
            <h4>{author.name}</h4>
          </a>
        </div>
      ))}{" "}
    </h2>
  );
};

export default Author;
