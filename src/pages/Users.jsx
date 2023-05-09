import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-12 py-6">
      <span className="flex flex-row-reverse">
        <Link to="/AddUser" className="btn btn-outline text-orange-400 hover:bg-orange-500">
          Add New User
        </Link>
      </span>
      <div className="mt-4 overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <>
              {users.map((item, index) => (
                <tr className="hover hover:cursor-pointer text-center">
                  <th key={index}>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/ViewUser/${item.id}`} className="btn bg-accent mr-2">View</Link>
                    <Link
                      to={`/EditUser/${item.id}`}
                      className="btn btn-outline btn-info mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-error hover:bg-red-600/80"
                      onClick={() => deleteUser(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
}
