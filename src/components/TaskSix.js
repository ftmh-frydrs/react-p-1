const ScoreMessage = (score) => {
  let message;

  if (score < 50) {
    message = "Your score is less than 50.";
  } else if (score >= 50 && score <= 80) {
    message = "Your score is between 50 and 80.";
  } else {
    message = "Your score is greater than 80.";
  }

  return message;
};
const TaskSix = () => {
  const score = 75;
  const message = ScoreMessage(score);
  return <div className="border border-pink-500 text-center rounded-lg mt-2 py-2">
    <p className="font-bold text-blue-400">Six</p>
    <p>{message}</p>
    </div>;
};

export default TaskSix;
