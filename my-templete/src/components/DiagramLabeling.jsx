export const DiagramLabeling = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="relative">
        <img src={item.diagramUrl} alt="Diagram to label" className="max-w-full" />
        {item.labelPoints.map((point, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{ top: `${point.y}%`, left: `${point.x}%` }}
          >
            <input
              type="text"
              className="border rounded px-2 py-1 w-32"
              maxLength={item.wordLimit ? item.wordLimit * 15 : undefined}
              placeholder={item.wordLimit ? `Max ${item.wordLimit} words` : ''}
              onChange={(e) => {
                const newAnswers = answers[item.id] || Array(item.labelPoints.length).fill('');
                newAnswers[idx] = e.target.value;
                handleAnswerChange(item.id, newAnswers);
              }}
              value={(answers[item.id] || [])[idx] || ''}
            />
          </div>
        ))}
      </div>
      {item.wordLimit && (
        <p className="text-sm text-gray-500 mt-2">Maximum {item.wordLimit} words per label</p>
      )}
    </div>
  );
};