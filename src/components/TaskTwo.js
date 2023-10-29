const TaskTwo = () => {
  const btnHandler = () => {
    console.log("cliked");
  };
  return (
    <div className="border border-pink-800 text-center rounded-lg mt-2 py-2">
        <p className="font-bold text-blue-400">Two</p>
        <button className="border border-blue-200 p-1 rounded-lg" onClick={btnHandler}>Click Me !</button>
    </div>
  )
};

export default TaskTwo;
