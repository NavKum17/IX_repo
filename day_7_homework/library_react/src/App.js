import React, { useState } from 'react';
// import bootsrap styling from node_modules (dont need relative path)
import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

//import components
import LibInput from './components/LibInput';
import LibTable from './components/LibTable';

// import book class, use {} because the book class is not the default export.
import { Book } from './models/Book';

export default function App() {
  const [books, setBooks] = useState([]);
  
  function CreateBook(title, author, isbn) {
    const book = new Book(title, author, isbn);

    setBooks([...books, book]);
  }

  function removeBook(isbn) {
    setBooks(books.filter((book)=>book.isbn !== isbn));
  }

  return (
    <div className='container my-5'>
      <div className='card card-body'>
        <h1>Library</h1>

        <LibInput CreateBook={CreateBook}></LibInput>
        <LibTable
          books={books}
          removeBook={removeBook}>

        </LibTable>
      </div>
    </div>
  )
}
