import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchingData = async () => {
    const userData = await axios
      .get(`https://gorest.co.in/public/v2/users`)
      .then((res) => res.data);
    setUsers(userData);
    console.log(userData);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const editHandler = () => {};

  const deleteHandler = (id) => {
    const filteredUser = users.filter((filtered) => {
      return filtered.id != id;
    });
    setUsers(filteredUser);
  };
  return (
    <div>
      <table style={{ width: "70rem" }}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Gender</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0
            ? users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button onClick={editHandler}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => deleteHandler(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : "No Users"}
        </tbody>
      </table>
      <Link to="create">
        <button style={{ margin: "5rem" }}>Create User</button>
      </Link>
    </div>
  );
};

export default Home;
