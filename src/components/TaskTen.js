const filterNumbers = (numbers) => {
  return numbers.filter((number) => number > 10);
};

const TaskTen = () => {
  const numbers = [11, 12, 13, 14];
  const filteredNumbersShow = filterNumbers(numbers);
  const filteredNumbersShowString = filteredNumbersShow.join(",");
  return (
    <div className="border border-pink-100 text-center rounded-lg mt-2 py-2">
        <p className="font-bold text-blue-400">Ten</p>
      <p>{filteredNumbersShowString}</p>
    </div>
  );
};

export default TaskTen;
