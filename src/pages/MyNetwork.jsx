import React from "react";
import Profile from "../components/Profile";
import People from "../components/People";
import Navbar from "../components/Navbar";
import ManageNetwork from "../components/ManageNetwork";

const MyNetwork = () => {
  return (
    <div>
      <Navbar />
      <div className="p-4 bg-[#f4f2ee] min-h-screen grid grid-cols-5 px-24 gap-6">
        <div className="col-span-1">
          <Profile />
          <ManageNetwork />
        </div>
        <div className="col-span-4">
          <People />
        </div>
      </div>
    </div>
  );
};

export default MyNetwork;