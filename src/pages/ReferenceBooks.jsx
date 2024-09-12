import React from 'react';

const ReferenceBooks = () => {
  return (
    <div>
      <h1>Reference Books</h1>
      <ul>
        {/* Placeholder for list of books */}
        <li>
          <h3>Book Title: Advanced Mathematics</h3>
          <p>Author: John Doe</p>
          <p>Description: A comprehensive guide to advanced mathematics.</p>
          <a href="/download">Download PDF</a>
        </li>
        {/* Additional books here */}
      </ul>
    </div>
  );
};

export default ReferenceBooks;
