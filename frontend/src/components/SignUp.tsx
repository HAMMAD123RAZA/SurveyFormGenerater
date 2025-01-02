import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const navigate=useNavigate()

    const handleSignUp = async () => {
        try {
            const response = await axios.post("https://survey-form-generater-so7y.vercel.app/signup", {
                userName,
                email,
                password,
            });
            console.log(response.data);
            if(response.data.token){
                localStorage.setItem('token',response.data.token)
                navigate('/')

            }
            setUserName('');
            setEmail('');
            setPassword('');
            // alert(response.data.message); 
        } catch (error:any) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message); // Alert the user with the error message from the server
            } else {
                console.log(error);
                alert("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="parent flex justify-center h-screen items-center bg-gray-100">
            <div className="div p-9 bg-white shadow-lg w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-blue-900 font-bold mb-2" htmlFor="name">Name:</label>
                    <input
                        value={userName}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
                        className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-blue-900 font-bold mb-2" htmlFor="email">Email:</label>
                    <input
                        value={email}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-blue-900 font-bold mb-2" htmlFor="password">Password:</label>
                    <input
                        value={password}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="w-full border-gray-300 rounded-lg border px-4 py-2 focus:outline-none focus:border-blue-500"
                        type="password"
                        name="password"
                        required
                        placeholder="Password"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSignUp}
                    className="w-full py-3 bg-blue-800 text-white rounded-lg font-bold hover:bg-blue-600"
                >
                    SignUp
                </button>
                <Link className="font-bold text-blue-600 underline" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default SignUp;