import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import UserCard from "./UserCard";

const UsersList = () => {
  const [usersData, setUsersData] = useState();
  const [loading, setLoading] = useState(false);

  const usersDetailAPI = async () => {
    const res = await axios.get(
      "https://602e7c2c4410730017c50b9d.mockapi.io/users"
    );
    setUsersData(res.data);
    setLoading(true);
  };

  useEffect(() => {
    usersDetailAPI();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-5">Users List</h1>
      <div className="container">
        <div
          className="row gap-4 
justify-content-center"
        >
          {loading ? usersData?.map((userData) => {
            return <div key={userData.id} className="col-12 col-md-4 col-lg-3">
              <UserCard userData={userData}></UserCard>
            </div>
          }):<Loading/>}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
