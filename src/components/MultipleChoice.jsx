
 const MultipleChoiceSingle = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="grid gap-2">
        {item.options.map((option, idx) => (
          <label key={idx} className="flex items-center gap-2">
            <input
              type="radio"
              name={`question-${item.id}`}
              value={String.fromCharCode(65 + idx)}
              onChange={(e) => handleAnswerChange(item.id, e.target.value)}
              checked={answers[item.id] === String.fromCharCode(65 + idx)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};
export default MultipleChoiceSingle