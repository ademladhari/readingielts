import  { useState } from 'react';

const MatchingFeatures = ({ question, statements, options, onChange }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(statements.length).fill(''));

  const handleSelectChange = (index, value) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = value;
    setSelectedAnswers(updatedAnswers);
    onChange(updatedAnswers);
  };

  return (
    <div>
      <h3>{question}</h3>
      {statements.map((statement, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{statement}</p>
          <select
            value={selectedAnswers[index]}
            onChange={(e) => handleSelectChange(index, e.target.value)}
          >
            <option value="">Select an option</option>
            {options.map((option, optionIndex) => (
              <option key={optionIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default MatchingFeatures;
