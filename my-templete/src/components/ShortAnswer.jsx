export const ShortAnswer = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="grid gap-4">
        {item.prompts.map((prompt, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="flex-1">{prompt}</div>
            <input
              type="text"
              className="border rounded px-2 py-1 w-48"
              maxLength={item.wordLimit ? item.wordLimit * 15 : undefined}
              placeholder={item.wordLimit ? `Max ${item.wordLimit} words` : ''}
              onChange={(e) => {
                const newAnswers = answers[item.id] || Array(item.prompts.length).fill('');
                newAnswers[idx] = e.target.value;
                handleAnswerChange(item.id, newAnswers);
              }}
              value={(answers[item.id] || [])[idx] || ''}
            />
          </div>
        ))}
      </div>
      {item.wordLimit && (
        <p className="text-sm text-gray-500 mt-2">Maximum {item.wordLimit} words per answer</p>
      )}
    </div>
  );
};