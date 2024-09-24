import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Post from "../components/Post";
import Recommend from "../components/Recommend";
import PostFeed from "../components/PostFeed";

function Home() {
  return (
    <div className="bg-[#f4f2ee] h-[100%]">
      <Navbar />
      <div className="grid grid-cols-5 mx-16 gap-6">
        <Profile />
        <div className="col-span-3">
          <Post />
          <hr className="text-gray-950" />
          <PostFeed />
        </div>
        <Recommend />
      </div>
    </div>
  );
}

export default Home;