export const Matching = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="grid gap-4">
        {item.options.map((option, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex-1">{option}</div>
            <select
              className="border rounded px-2 py-1"
              onChange={(e) => {
                const newAnswers = answers[item.id] || Array(item.options.length).fill('');
                newAnswers[idx] = e.target.value;
                handleAnswerChange(item.id, newAnswers);
              }}
              value={(answers[item.id] || [])[idx] || ''}
            >
              <option value="">Select...</option>
              {item.matches.map((match, matchIdx) => (
                <option key={matchIdx} value={match.id}>{match.text}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};