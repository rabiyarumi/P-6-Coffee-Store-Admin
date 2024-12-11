import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const Users2 = () => {

    const {isPending, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(" https://coffee-store-server-chi-lime.vercel.app/users");
            return res.json();
        }
    })

    if(isPending){
        return <p>loading.........</p>
    }

    
  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete from database
        fetch(` https://coffee-store-server-chi-lime.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });

              const remainingUser = users.filter(user => user._id !== id);
              setUsers(remainingUser);
            }

          });
      }
    });
  };
    return (
        <div>
        {/* <h1 className="text-3xl font-bold text-center">users: {users.length}</h1> */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Login At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users.map((user) => (
                <tr key={user._id} className="hover">
                  <th>1</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.createdAt}</td>
                  <td>{user?.lastSignInTime}</td>
                  <td>
                    <button className="btn-sm btn">E</button>
                    <button
                      onClick={() => handleUserDelete(user?._id)}
                      className="btn-sm btn"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users2;