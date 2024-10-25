const MultipleChoiceMultiple = ({ item, answers, handleAnswerChange }) => {
    return (
      <div className="mb-6">
        <h3 className="font-medium mb-4">{item.question}</h3>
        <div className="grid gap-2">
          {item.options.map((option, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={String.fromCharCode(65 + idx)}
                onChange={(e) => {
                  const currentAnswers = answers[item.id] || [];
                  const value = String.fromCharCode(65 + idx);
                  const newAnswers = e.target.checked
                    ? [...currentAnswers, value]
                    : currentAnswers.filter(a => a !== value);
                  handleAnswerChange(item.id, newAnswers);
                }}
                checked={(answers[item.id] || []).includes(String.fromCharCode(65 + idx))}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    );
  };
  export default MultipleChoiceMultiple