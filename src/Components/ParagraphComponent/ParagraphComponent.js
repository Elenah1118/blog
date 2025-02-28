import React from "react";
import "./ParagraphComponent.css";

const ParagraphComponent = ({ id, title, content, link }) => {
  return (
    <div className="container">
      <h2 id={id}>{title}</h2>
      <p>
        {content}{" "}
        {link && (
          <a href={link.url} rel="dofollow">
            {link.text}
          </a>
        )}
      </p>
    </div>
  );
};

export default ParagraphComponent;
