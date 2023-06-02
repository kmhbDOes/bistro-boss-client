import React from "react";
import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        Welcome Back <span className="text-orange-500">{user.displayName}</span>
      </h2>
    </div>
  );
};

export default AdminHome;
