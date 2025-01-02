import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Props from './Props';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Swal from 'sweetalert2'

interface surveyItem{
  id:string|number,
  question:string,
  choices:string[],
}

const ViewForm = () => {
  const [data, setData] = useState<surveyItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<surveyItem[]>("https://survey-form-generater-so7y.vercel.app/");
        console.log("Fetched data:", response.data);
        setData(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id:any) => {
    console.log("Deleting ID:", id);
    if (!id) {
        console.error("Invalid ID for deletion");
        return;
    }

    try {
        await axios.delete(`https://survey-form-generater-so7y.vercel.app/delete/${id}`);
        setData((prevData) => prevData.filter((item) => item.id !== id));
        console.log(`Deleted item with ID: ${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Deleted An Item!",
          icon: "success"
        });
    } catch (error:any) {
        console.error("Error deleting data:", error);
    }
};
  
  return (
    <div className="flex flex-col py-3 justify-center items-center bg-gray-100">
      {data.length > 0 ? (
        data.map((item) => (
          <Props key={item.id} handleDelete={handleDelete} value={item} />
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
};

export default ViewForm;