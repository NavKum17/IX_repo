import React, { useState } from 'react'

export default function LibInput(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setisbn] = useState("");

  function onSubmitForm(e) {
      e.preventDefault();

      props.CreateBook(title, author, isbn);

      setTitle('');
      setAuthor('');
      setisbn("");
  }

  return (
    <div>
        <form onSubmit={onSubmitForm}>
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="form-control"/>

            <label className="form-label">Author</label>
            <input 
              value={author}
              onChange={(e)=>setAuthor(e.target.value)}
              className="form-control"/>

            <label className="form-label">ISBN #</label>
            <input 
              value={isbn}
              onChange={(e)=>setisbn(e.target.value)}
              className="form-control"/>

            <button className='btn btn-primary my-3' type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}
