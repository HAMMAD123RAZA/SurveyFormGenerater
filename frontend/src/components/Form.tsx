import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Form = () => {
  const [question, setQuestion] = useState<string>('');
  const [choices, setChoices] = useState<string[]>(['', '', '']); 

  const handleCreate = async () => {
    try {
      const response = await axios.post("https://survey-form-generater-so7y.vercel.app/create", {
        question,
        choices
      });
      Swal.fire({
                title: "Created!",
                text: "Created Form !",
                icon: "success"
              });
      setQuestion('')
      setChoices(['', '', '']);
      console.log(response.data);
    } catch (error:any) {
      console.error(error.message);
    }
  };

  const handleChoiceChange = (index:number, value:string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  return (
    <>
      <div className="parent my-40 text-center ">
        <div className='my-7'>
          <label className='font-bold text-xl text-blue-900' htmlFor="question">Question:</label>
          <input
            className='border-gray-500  rounded-full p-3 border-2 ms-8'
            type="text"
            name='question'
            placeholder='Enter question'
            required
            aria-required
            value={question}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
          />
        </div>
        {choices.map((choice, index) => (
          <div key={index} className='my-7'>
            <label className='font-bold text-xl text-blue-900' htmlFor={`choice${index}`}>Choice:</label>
            <input
              className='border-gray-500  rounded-full p-3 border-2 ms-8'
              type="text"
              name={`choice${index}`}
              placeholder='Enter choice'
              required
              aria-required
              value={choice}
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChoiceChange(index, e.target.value)}
            />
          </div>
        ))}
        <button
          className='my-10 px-3 ms-9 py-2 font-bold  bg-blue-800 hover:bg-white text-white rounded-lg p-3 border-2  border-blue-600 hover:text-blue-700'
          onClick={handleCreate}
        >
          Create
        </button>
        <Link
        to='/view'
          className='my-10 px-5 ms-9 py-2 font-bold  bg-blue-800 hover:bg-white text-white rounded-lg p-3 border-2  border-blue-600 hover:text-blue-700'
        >
          View
        </Link>
      </div>
    </>
  );
};

export default Form;
