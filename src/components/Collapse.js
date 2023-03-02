import arrow from "../assets/arrow.png";
import "../styles/collapse.scss";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Collapse({ title, content }) {
  const [opened, setOpened] = useState(true);
  return (
    <div className="collapse">
      <h2
        className="collapse_title"
        onClick={() => {
          setOpened(!opened);
        }}
      >
        {title}
        <img src={arrow} alt="display/hide content arrow" />
      </h2>
      <div
        className="collapse_text"
        style={opened ? { display: "block" } : { display: "none" }}
      >
        {Array.isArray(content)
          ? content.map((item, id) => {
              return <p key={id}>{item}</p>;
            })
          : content}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
};

export default Collapse;
