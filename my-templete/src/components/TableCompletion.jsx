export const TableCompletion = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {item.headers.map((header, idx) => (
                <th key={idx} className="border border-gray-300 px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {item.rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className="border border-gray-300 px-4 py-2">
                    {cell.isGap ? (
                      <input
                        type="text"
                        className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        maxLength={item.wordLimit ? item.wordLimit * 15 : undefined}
                        placeholder={item.wordLimit ? `Max ${item.wordLimit} words` : ''}
                        onChange={(e) => {
                          const newAnswers = answers[item.id] || [];
                          const gapIndex = item.rows.flat().filter((c, i) => c.isGap && i < (rowIdx * row.length + cellIdx)).length;
                          newAnswers[gapIndex] = e.target.value;
                          handleAnswerChange(item.id, newAnswers);
                        }}
                        value={(answers[item.id] || [])[item.rows.flat().filter((c, i) => c.isGap && i < (rowIdx * row.length + cellIdx)).length] || ''}
                      />
                    ) : (
                      cell.text
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};