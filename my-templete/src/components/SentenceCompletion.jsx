export const SentenceCompletion = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="grid gap-4">
        {item.sentences.map((sentence, idx) => (
          <div key={idx} className="flex gap-4 items-center">
            <div className="flex-1">
              {sentence.prefix}
              <input
                type="text"
                className="border-b border-gray-300 mx-2 w-32 focus:outline-none focus:border-blue-500"
                maxLength={item.wordLimit ? item.wordLimit * 15 : undefined}
                placeholder={item.wordLimit ? `Max ${item.wordLimit} words` : ''}
                onChange={(e) => {
                  const newAnswers = answers[item.id] || Array(item.sentences.length).fill('');
                  newAnswers[idx] = e.target.value;
                  handleAnswerChange(item.id, newAnswers);
                }}
                value={(answers[item.id] || [])[idx] || ''}
              />
              {sentence.suffix}
            </div>
          </div>
        ))}
      </div>
      {item.wordLimit && (
        <p className="text-sm text-gray-500 mt-2">Maximum {item.wordLimit} words per blank</p>
      )}
    </div>
  );
};