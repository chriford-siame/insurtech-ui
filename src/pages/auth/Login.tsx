import React, { useState } from 'react'
import { useAuth } from 'src/hooks/useAuth';
import { motion } from 'framer-motion'
import { Car } from 'lucide-react';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { handleLogin } = useAuth();


    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await handleLogin(username, password);
            // Redirect after login
            window.location.href = "/";
        } catch (err) {
            setError("Invalid credentials");
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-col items-center mb-6"
                >
                    <Car className="w-12 h-12 text-blue-600 mb-2" />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Motor Quote Login
                    </h1>
                    <p className="text-gray-500 text-sm">Secure access to your portal</p>
                </motion.div>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <label className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="text"
                            onChange={handleUsernameChange}
                            required={true}
                            placeholder="you@example.com"
                            className="mt-1 w-full text-[14pt] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            onChange={handlePasswordChange}
                            placeholder="••••••••"
                            className="mt-1 w-full text-[14pt] px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-between"
                    >
                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" className="rounded border-gray-300 w-4 h-4 cursor-pointer" />
                            Remember me
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot Password?
                        </a>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        type="submit"
                        className="w-full text-[14pt] py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                    >
                        Login
                    </motion.button>
                </form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-6 text-center text-sm text-gray-600"
                >
                    Don’t have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline font-medium">
                        Sign Up
                    </a>
                </motion.p>
            </motion.div>
        </div>
    );
}

// <div className="flex justify-center">
//     <div className=" md:w-[45%] border p-2 lg:md:w-[45%] xl:md:w-[45%] text-2xl">
//         <div className="flex justify-center my-2 w-full">
//             <p className="text-gray-500 font-bold">Login</p>
//         </div>
//         {/* <hr /> */}
//         <form onSubmit={handleSubmit} className='grid container gap-2 text-[12pt]'>
//             <label htmlFor="username">Username</label>
//             <input
//                 name='username'
//                 id='username'
//                 placeholder=''
//                 type="text"
//                 className='border border-gray-300 p-2'
//                 onChange={handleUsernameChange}
//                 required={true}
//                 maxLength={50} />

//             <label htmlFor="password">Password</label>
//             <input
//                 name='password'
//                 id='password'
//                 placeholder=''
//                 type="password"
//                 className='border border-gray-300 p-2'
//                 onChange={handlePasswordChange}
//                 required={true}
//             />
//             <div className="grid gap-1">
//                 <div className='flex justify-between'>
//                     <a href='#' className=' text-blue-400 hover:text-blue-500'>Forgot password</a>
//                     <p>Don't have an account? <a href='/register' className=' text-blue-400 hover:text-blue-500'>Signup</a></p>
//                 </div>
//             </div>
//             <button type="submit" className='text-white bg-blue-600 p-2 w-full'>submit</button>
//         </form>
//     </div>
// </div>
// );
// }