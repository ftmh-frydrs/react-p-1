const TaskFour = () => {
  const filterEvenNumbers = (array) => {
    const evenNumbers = array.filter((number) => number % 2 === 0);
    return evenNumbers;
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbers);
  const evenNumbersString = evenNumbers.join(", ");

  return (
    <div className="border border-pink-600 text-center rounded-lg mt-2 py-2">
        <p className="font-bold text-blue-400">Four</p>
      <p>{evenNumbersString}</p>
    </div>
  );
};

export default TaskFour;
