import React, { useState } from 'react'
import { auth } from '../../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
        
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            navigate('/');

        } catch(err) {
            alert(err.message);
        }
    }

  return (
    <div className='container my-4'>

      <div className='card card-body'>

        <h1>Register</h1>

        <p>Please enter your email and password to register</p>

        <form onSubmit={onFormSubmit}>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control" />
          </div>

          <div className='d-flex justify-content-end mt-4'>
            <button type='submit' className='btn btn-primary px-5'>
              Register
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}
