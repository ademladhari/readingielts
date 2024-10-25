 const ChoosingTitles = ({ item, answers, handleAnswerChange }) => {
    return (
      <div className="mb-6">
        <h3 className="font-medium mb-4">{item.question}</h3>
        <div className="grid gap-6">
          {item.paragraphs.map((paragraph, idx) => (
            <div key={idx} className="space-y-2">
              <select
                className="border rounded px-2 py-1 w-full"
                onChange={(e) => {
                  const newAnswers = answers[item.id] || Array(item.paragraphs.length).fill('');
                  newAnswers[idx] = e.target.value;
                  handleAnswerChange(item.id, newAnswers);
                }}
                value={(answers[item.id] || [])[idx] || ''}
              >
                <option value="">Select a title...</option>
                {item.titles.map((title, titleIdx) => (
                  <option key={titleIdx} value={title}>{title}</option>
                ))}
              </select>
              <div className="p-4 bg-gray-50 rounded">
                {paragraph}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  export default ChoosingTitles