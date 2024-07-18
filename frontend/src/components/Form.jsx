import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Form = () => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '']); 

  const handleCreate = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create", {
        question,
        choices
      });
      console.log(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChoiceChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  return (
    <>
      <div className="parent my-40 text-center ">
        <div className='my-7'>
          <label className='font-bold text-blue-900' htmlFor="question">Question:</label>
          <input
            className='border-gray-500  border-2 ms-8'
            type="text"
            name='question'
            placeholder='Enter question'
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        {choices.map((choice, index) => (
          <div key={index} className='my-7'>
            <label className='font-bold text-blue-900' htmlFor={`choice${index}`}>Choice:</label>
            <input
              className='border-gray-500  border-2 ms-8'
              type="text"
              name={`choice${index}`}
              placeholder='Enter choice'
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
            />
          </div>
        ))}
        <button
          className='my-10 px-3 ms-5 py-2 font-bold rounded bg-blue-800 hover:bg-white text-white border-2 border-blue-600 hover:text-blue-700'
          onClick={handleCreate}
        >
          Create
        </button>
        <Link
        to='/view'
          className='my-10 px-5 ms-5 py-2 font-bold rounded bg-blue-800 hover:bg-white text-white border-2 border-blue-600 hover:text-blue-700'
        >
          View
        </Link>
      </div>
    </>
  );
};

export default Form;
