import React from "react";

const Sidebar = (props) => {
  return (
    <h2>
      <a onClick={props.backToAuthor}>Back to Author List</a>
    </h2>
  );
};

export default Sidebar;
