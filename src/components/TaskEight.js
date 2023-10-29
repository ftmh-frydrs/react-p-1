const countCharacters = (text) => {
  return text.length;
};

const TaskEight = () => {
  const charCount = countCharacters("characters");

  return (
    <div className="border border-pink-300 text-center rounded-lg mt-2 py-2">
        <p className="font-bold text-blue-400">Eight</p>
      <p>{charCount}</p>
    </div>
  );
};

export default TaskEight;
