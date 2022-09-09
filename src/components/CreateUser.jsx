import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const CreateUser = () => {
  const [newUser, setNewUser] = useState([{ name: "", email: "", gender: "" }]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newGender, setNewGender] = useState("");

  useEffect(() => {
    async function fetchData() {
      let createdUser = await axios.post(`
          https://gorest.co.in/public/v2/${setNewUser}`);
      console.log(createdUser);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setNewUser([{ name: newName, email: newEmail, gender: newGender }]);
  };

  console.log(newName);
  console.log(newEmail);
  console.log(newGender);
  console.log(newUser);

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          name="name"
          id=""
          placeholder="Enter Name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          type="text"
          name="email"
          id=""
          placeholder="Enter email"
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <input
          type="text"
          name="gender"
          id=""
          placeholder="Enter gender"
          onChange={(e) => {
            setNewGender(e.target.value);
          }}
        />

        <button onClick={submitHandler}>Add</button>
      </form>
    </>
  );
};

export default CreateUser;
