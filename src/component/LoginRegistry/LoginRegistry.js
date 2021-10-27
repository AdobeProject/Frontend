import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser, signInUser } from "../../store/authSlice";
import "./LoginRegistry.scss";

const ROLES = { STUDENT: 'STUDENT', TEACHER: 'TEACHER' }

const LoginRegistry = () => {
  const [addclass, setaddclass] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(ROLES.STUDENT);
  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Name can't be empty");
  const [surnameError, setSurnameError] = useState("Surname can't be empty");
  const [emailError, setEmailError] = useState("Email can't be empty");
  const [passwordError, setPasswordError] = useState("Password can't be empty");
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch()


  useEffect(() => {
    setEmail('')
    setPassword('')
  }, [])


  useEffect(() => {
    if (nameError || surnameError || emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, surnameError, emailError, passwordError])

  console.log('formValid', formValid);

  const nameHandler = (e) => {
    setName(e.target.value)
    const reg = /^[a-zA-Z ]{2,20}$/;
    if ((!reg.test(String(e.target.value).toLowerCase()))) {
      setNameError("Invalid name")
      if (!e.target.value) {
        setNameError("Name can't be empty")
      }
    } else {
      setNameError("")
    }
  }

  const surnameHandler = (e) => {
    setSurname(e.target.value)
    const reg = /^[a-zA-Z ]{2,20}$/;
    if ((!reg.test(String(e.target.value).toLowerCase()))) {
      setSurnameError("Invalid surname")
      if (!e.target.value) {
        setSurnameError("Surname can't be empty")
      }
    } else {
      setSurnameError("")
    }
  }

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!reg.test(String(e.target.value).toLowerCase())) {
      setEmailError("Invalid Email")
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters")
      if (!e.target.value) {
        setPasswordError("Password can't be empty")
      }
    } else {
      setPasswordError("")
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      case 'name':
        setNameDirty(true)
        break
      case 'surname':
        setSurnameDirty(true)
    }
  }

  const handelOnRegister = (event) => {
    event.preventDefault();
    const userData = {
      firstName: name,
      secondName: surname,
      password,
      email,
      role,
    }
    dispatch(registerUser({ ...userData }))
  }

  const handelOnLogin = (event) => {
    event.preventDefault();
    console.log('login');
    const userData = {
      email,
      password,
    }
    dispatch(signInUser(userData))

  }

  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
          {(nameDirty && nameError) && <div style={{ color: "#CB1F1F" }}>{nameError}</div>}
          <input name="name" type="text" placeholder="NAME" value={name} onBlur={e => blurHandler(e)} onChange={e => nameHandler(e)} />
          {(surnameDirty && surnameError) && <div style={{ color: "#CB1F1F" }}>{surnameError}</div>}
          <input name="surname" type="text" placeholder="SURNAME" value={surname} onBlur={e => blurHandler(e)} onChange={(e) => surnameHandler(e)} />
          {(emailDirty && emailError) && <div style={{ color: "#CB1F1F" }}>{emailError}</div>}
          <input name="email" type="email" placeholder="EMAIL" value={email} onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} />
          {(passwordDirty && passwordError) && <div style={{ color: "#CB1F1F" }}>{passwordError}</div>}
          <input name="password" type="password" placeholder="PASSWORD" value={password} onBlur={e => blurHandler(e)} onChange={e => passwordHandler(e)} />
          <label className="radio-box">
            <input
              type="radio"
              name="user"
              value="1"
              className="radio_input"
              onClick={() => setRole(ROLES.STUDENT)}
              checked
            />
            I want to learn
          </label>
          <label className="radio-box">
            <input type="radio" name="user" value="2" className="radio_input" onClick={() => setRole(ROLES.TEACHER)}
            />
            I want to teach
          </label>
          <button disabled={!formValid} type="submit" className="register-botton" onClick={handelOnRegister}>
            REGISTER
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          {(emailDirty && emailError) && <div style={{ color: "#CB1F1F" }}>{emailError}</div>}
          <input name="email" type="email" placeholder="EMAIL" value={email} onBlur={e => blurHandler(e)} onChange={e => emailHandler(e)} />
          {(passwordDirty && passwordError) && <div style={{ color: "#CB1F1F" }}>{passwordError}</div>}
          <input name="password" type="password" placeholder="PASSWORD" value={password} onBlur={e => blurHandler(e)} onChange={e => passwordHandler(e)} />
          <button type="submit" className="register-botton" onClick={handelOnLogin}>
            LOGIN
          </button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              className="register-botton"
              id="signIn"
              onClick={() => setaddclass("")}
            >
              GO TO LOGIN
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              className="register-botton"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              GO TO REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegistry;
