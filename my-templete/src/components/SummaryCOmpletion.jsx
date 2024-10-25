import React from "react";

export const SummaryCompletion = ({ item, answers, handleAnswerChange }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">{item.question}</h3>
      <div className="prose max-w-none">
        {item.summary.map((part, idx) => (
          <React.Fragment key={idx}>
            {part.text}
            {part.isGap && (
              <select
                className="border rounded px-2 py-1 mx-1"
                onChange={(e) => {
                  const newAnswers = answers[item.id] || Array(item.summary.filter(p => p.isGap).length).fill('');
                  const gapIndex = item.summary.filter((p, i) => p.isGap && i < idx).length;
                  newAnswers[gapIndex] = e.target.value;
                  handleAnswerChange(item.id, newAnswers);
                }}
                value={(answers[item.id] || [])[item.summary.filter((p, i) => p.isGap && i < idx).length] || ''}
              >
                <option value="">Select...</option>
                {item.wordList?.map((word, wordIdx) => (
                  <option key={wordIdx} value={word}>{word}</option>
                ))}
              </select>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};