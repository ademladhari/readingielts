import { useState } from 'react';

const MatchingHeadings = ({ question, paragraphs, headings, onChange }) => {
  const [selectedMatches, setSelectedMatches] = useState(Array(paragraphs.length).fill(''));

  const handleSelectChange = (index, value) => {
    const updatedMatches = [...selectedMatches];
    updatedMatches[index] = value;
    setSelectedMatches(updatedMatches);
    onChange(updatedMatches);
  };

  return (
    <div>
      <h3>{question}</h3>
      {paragraphs.map((paragraph, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <p>{paragraph}</p>
          <select
            value={selectedMatches[index]}
            onChange={(e) => handleSelectChange(index, e.target.value)}
          >
            <option value="">Select a heading</option>
            {headings.map((heading, headingIndex) => (
              <option key={headingIndex} value={heading}>
                {heading}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default MatchingHeadings;
