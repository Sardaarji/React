import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Login Page</h1>

      <LabelComponent value="Username:" />
      <InputComponent type="text" />

      <br />

      <LabelComponent value="Password:" />
      <InputComponent type="password" />

      <br />

      <ButtonComponent name="Login" />
    </div>
  );
}

function LabelComponent(props) {
  return (
    <div>
      <label> {props.value} </label>
    </div>
  );
}

function InputComponent(props) {
  return (
    <div>
      <input type={props.type} />
    </div>
  );
}

function ButtonComponent(props) {
  return (
    <div>
      <button onClick={alert("Login Successfull")}> {props.name} </button>
    </div>
  );
}
