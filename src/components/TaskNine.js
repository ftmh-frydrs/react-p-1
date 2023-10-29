const checkNumber = (number) => {
  if (number % 2 === 0) {
    return "This number is even";
  } else {
    return "This number is odd";
  }
};

const TaskNine = () => {
  const message = checkNumber(10);
  return (
    <div className="border border-pink-200 text-center rounded-lg mt-2 py-2">
      <p className="font-bold text-blue-400">nine</p>
      <p>{message}</p>
    </div>
  );
};

export default TaskNine;
