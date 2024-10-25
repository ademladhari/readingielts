import React from 'react';

const MatchingDefinitions = ({ question, options, information, onChange }) => {
  const handleSelectChange = (index, value) => {
    // Create an array of current answers
    const newAnswers = Array(options.length).fill('');
    // Update the selected answer at the specific index
    newAnswers[index] = value.charAt(0);
    // Pass the entire array back to parent
    onChange(newAnswers);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">{question}</h2>
        
        <div className="space-y-4">
          {options.map((option, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-grow">
                  <p className="text-sm text-gray-700">{option}</p>
                </div>
                <select
                  className="border border-gray-300 rounded px-3 py-2 min-w-[150px] 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  defaultValue=""
                >
                  <option value="">Select Answer</option>
                  {information.map((info, idx) => (
                    <option key={idx} value={info}>
                      {info}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchingDefinitions;