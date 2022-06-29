import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { auth } from "./firebase/firebase";
import { onAuthStateChanged} from "firebase/auth";

// import bootstrap styling from node_modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import RecipePage from "./components/recipes/RecipePage";
import RegisterPage from "./components/auth/RegisterPage";
import LoginPage from "./components/auth/LoginPage";
import NavBar from "./components/common/NavBar";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [])

  return (
    <BrowserRouter>
      <NavBar user={user}></NavBar>
      <Routes>
        <Route path="/" element={<RecipePage></RecipePage>} />
        <Route path="/login" element={<LoginPage></LoginPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
      </Routes>
    </BrowserRouter>
  );
}
