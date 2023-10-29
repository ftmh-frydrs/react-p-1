const calculateSquare = (number) => {
  return number * number;
};

const TaskSeven = () => {
  const squaredNumber = calculateSquare(7);
  return (
    <div className="border border-pink-400 text-center rounded-lg mt-2 py-2">
        <p className="font-bold text-blue-400">Seven</p>
        <p>{squaredNumber}</p>
    </div>
  )
};

export default TaskSeven;
