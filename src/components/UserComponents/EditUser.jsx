import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/ListUsers");
  };

//   data của user cụ thể có trong 
  useEffect(() => {
    axios.get(`http://localhost:8080/user/${id}`).then((res) => {
      const { data } = res;
      setUser(data);
    });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="outline outline-offset-8 my-8 mx-16 md:mx-[200px] rounded font-mono">
        <h1 className="text-center text-3xl m-5">Edit User</h1>
        <form className="text-center" onSubmit={(e) => onSubmit(e)}>
          <div>
            <p>Name</p>
            <input
              type="text"
              placeholder="Name"
              className="my-3 input input-bordered w-full max-w-lg"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <p>Username</p>
            <input
              type="text"
              placeholder="Type ypur username"
              className="my-3 input input-bordered w-full max-w-lg"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="email"
              placeholder="Type your email"
              className="my-3 input input-bordered w-full max-w-lg"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline text-sky-600 hover:bg-sky-600 my-3"
          >
            Submit
          </button>
          <Link
            to="/ListUsers"
            className="btn btn-outline text-red-400 hover:bg-red-400 my-3 ml-4"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
