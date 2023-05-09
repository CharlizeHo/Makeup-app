import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
  const [viewUser, setViewUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setViewUser(result.data);
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="outline outline-offset-8 my-8 mx-16 md:mx-[200px] rounded font-mono">
        <span className="flex justify-end">
          <h1 className="mx-auto text-3xl m-5">View User Details</h1>
          <Link to={"/ListUsers"} className="btn btn-square btn-sm">
            <i class="fa-solid fa-xmark"></i>
          </Link>
        </span>

        <div className="card-body">
          <div className="card-actions justify-end">ID: #{viewUser.id}</div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 pr-6">
            <li className="sm:col-start-2 ">Name: </li>
            <li>{viewUser.name}</li>
            <li className="sm:col-start-2 ">Username:</li>
            <li>{viewUser.username}</li>
            <li className="sm:col-start-2">Email:</li>
            <li>{viewUser.email}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
