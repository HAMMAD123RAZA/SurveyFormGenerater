import React from 'react';
import { MdDelete } from "react-icons/md";

interface propTypes{
  value:{
    id:string,
    question:string,
    choices:string[],
  
  };
  handleDelete:(id:string|number)=>void
}

const Props:React.FC<propTypes> = ({ value, handleDelete }) => {
  console.log("Props value:", value); 
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 w-full max-w-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-blue-900 text-xl mb-4">{value.question}</h3>
        <MdDelete onClick={() => handleDelete(value.id)} size={28} color="blue" />
      </div>
      {value.choices.map((choice, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            className="mr-2"
            type="radio"
            name={value.id}
            value={choice}
            id={`${value.id}-${index}`}
          />
          <label className="text-gray-700" htmlFor={`${value.id}-${index}`}>
            {choice}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Props;