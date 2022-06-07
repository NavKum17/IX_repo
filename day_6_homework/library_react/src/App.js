import React from 'react';
import './App.css';

function App() {
  return (
    <div className="parent">
      <h1>Library</h1>

      <label>Title</label>
      <input></input>

      <label>Author</label>
      <input></input>

      <label>#ISBN</label>
      <input></input>

      <button>
        Submit
      </button>

      <table>
        <thead>
          <td>
            Title
          </td>
          <td>
            Author
          </td>
          <td>
            #ISBN
          </td>
          <td>
            Actions
          </td>
        </thead>

        <tbody>

        </tbody>
      </table>

    </div>
  );
}

export default App;
