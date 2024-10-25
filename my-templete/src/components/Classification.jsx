export  const Classification = ({ item, answers, handleAnswerChange }) => {
    return (
      <div className="mb-6">
        <h3 className="font-medium mb-4">{item.question}</h3>
        <div className="grid gap-4">
          {item.statements.map((statement, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-1">{statement}</div>
              <select
                className="border rounded px-2 py-1"
                onChange={(e) => {
                  const newAnswers = answers[item.id] || Array(item.statements.length).fill('');
                  newAnswers[idx] = e.target.value;
                  handleAnswerChange(item.id, newAnswers);
                }}
                value={(answers[item.id] || [])[idx] || ''}
              >
                <option value="">Select category...</option>
                {item.categories.map((category, catIdx) => (
                  <option key={catIdx} value={category}>{category}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>
    );
  };
