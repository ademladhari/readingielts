
const YesNoNotGiven = ({ question, options, information, onChange }) => {
  const handleChange = (index, e) => {
    onChange(index, e.target.value);
  };


  return (
    <div className="my-4 p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      
      {options.map((option, index) => (
        <div key={index} className="mb-4">
          <p className="font-medium">{option}</p>
          <select
            className="mt-2 p-2 border rounded"
            onChange={(e) => handleChange(index, e)}
            defaultValue=""
          >
            <option value="" disabled>
              Select an option
            </option>
            {information.map((info, i) => (
              <option key={i} value={info}>
                {info}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default YesNoNotGiven;
