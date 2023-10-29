import React from "react";
import posts from "./posts.json";

const TaskThree = () => {
  const filteredPosts = posts.filter((post) => post.id % 24 === 0);

  return (
    <div className="border border-pink-50 text-center rounded-lg mt-2 p-3">
      <p className="font-bold text-blue-400">three</p>
      {filteredPosts.map((post) => {
        return (
          <div
            key={post.id}
            className="border border-blue-200 rounded-lg mt-2 py-2"
          >
            <ul>
              <li>{post.id}</li>
              <li>{post.title}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TaskThree;
