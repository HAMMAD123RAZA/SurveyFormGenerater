import React from 'react';

const Props = ({ value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-full max-w-md">
      <h3 className="font-bold text-blue-900 text-xl mb-4">{value.question}</h3>
      {value.choices.map((choice, index) => (
        <div key={index} className="flex items-center mb-2">
          <input className="mr-2" type="radio" name={value._id} value={choice} id={`${value._id}-${index}`} />
          <label className="text-gray-700" htmlFor={`${value._id}-${index}`}>{choice}</label>
        </div>
      ))}
    </div>
  );
}

export default Props;
