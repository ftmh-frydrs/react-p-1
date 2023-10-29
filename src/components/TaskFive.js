import React from "react";

const Greeting = ({ isLoggedIn }) => {
  return <div className="border border-pink-500 text-center rounded-lg mt-2 py-2">
    <p className="font-bold text-blue-400">Five</p>
    <div>{isLoggedIn ? <p>Welcome</p> : <p>Please log in</p>}</div>
    </div>;
};

export default Greeting;
