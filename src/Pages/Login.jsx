import React, { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import Add from "../Img/addAvatar.png";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

export const Login = () => {

  const [err, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    console.log(email, password);

    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
     
    } catch (error) {
      setError(true);
      console.log(error);
    }

  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="logo">Register</span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign In</button>
        </form>
        <p>You don´t have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};
