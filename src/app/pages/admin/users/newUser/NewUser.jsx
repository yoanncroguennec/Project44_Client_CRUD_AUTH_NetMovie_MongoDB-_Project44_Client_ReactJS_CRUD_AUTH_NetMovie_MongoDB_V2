import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Switch, Typography } from "@mui/material";
import axios from "axios";
// STYLES

export default function NewUser({ setUser }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [avatar, setAvatar] = useState(); // State qui va contenir l'avatar
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    setErrorMsg(""); // Je fais disparaitre le message d'erreur
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          username, // username: username
          firstName,
          lastName,
          email,
          password,
          // sex: sex,
        }
      );

      // console.log(res.data);
      setUser(res.data.token, res.data._id); // handleToken reçu en props
      console.log(
        `Bravo, vous avez soumis votre formulaire. Votre email est ${email}`
      );
      console.log("token :", res.data.token);
      navigate("/");
      // }
    } catch (error) {
      console.log("error.res.data", error.res.data);
      console.log("error.res.status", error.res.status);
    }
  };

  function toggler() {
    sex ? setSex(false) : setSex(true);
  }

  console.log("sex :", sex);
  return (
    <div className='signup-container'>
      <Typography variant='h4'>S'inscrire :</Typography>
      <form onSubmit={handleSignup} className='signup-form'>
        {/* NOT MANDATORY */}
        {/* MANDATORY */}
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Nom d'utilisateur"
          type='text'
        />
        <input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            setErrorMessage("");
          }}
          placeholder='Prénom'
          type='text'
        />
        <input
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            setErrorMessage("");
          }}
          placeholder='Nom de Famille'
          type='text'
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorMessage("");
          }}
          placeholder='Email'
          type='email'
        />
        <span className='signup-login-error-message'>{errorMessage}</span>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder='Mot de passe'
          type='password'
        />
        <Switch onClick={toggler} />
        {sex ? <>Femme</> : <>Homme</>}

        <input
          checked={sex}
          onChange={() => {
            setSex(!sex);
          }}
          type='checkbox'
        />
        <span>S'inscrire à notre newsletter</span>
        <button type='submit'>S'inscrire</button>
      </form>
      <Link to='/login'>Tu as déjà un compte ? Connecte-toi !</Link>
    </div>
  );
}
