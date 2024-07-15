import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Props from './Props';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const ViewForm = () => {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {data.length > 0 ? (
        data.map((item) => (
          <Props key={item._id} value={item} />
        ))
      ) : (
        <p className="text-2xl text-blue-900">No data available</p>
      )}
      <Link
        to="/form"
        className="flex items-center mt-8 px-4 py-2 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-600"
      >
        <IoIosArrowBack className="mr-2" />
        Back
      </Link>
    </div>
  );
}

export default ViewForm;
