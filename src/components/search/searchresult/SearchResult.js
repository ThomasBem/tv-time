import React from "react";

const SearchResult = ({ name, image, summary }) => (
  <div>
    <img src={image} alt={`Cover for the tv show ${name}`} />
    <p>{name}</p>
    <p>{summary}</p>
  </div>
);

export default SearchResult;
