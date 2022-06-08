import React from 'react'

export default function LibTable(props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN #</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => 
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button className='btn btn-danger' onClick={(e) => props.removeBook(book.isbn)}>
                  <i className="bi bi-x-circle"></i>
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
