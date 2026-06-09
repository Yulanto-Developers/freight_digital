'use client'
import React from 'react';
import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SignInLayout() {
    const [datas, setDatas] = useState({ email: '', password: '' })
    const [types, setTypes] = useState(true);
    const navigate = useRouter();

    function handlechnages(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setDatas((prev) => ({
            ...prev, [name]: value
        }))
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //     console.log(datas);

        const LoginApi = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ email: datas.email, password: datas.password })
        });

        const resposneApi = await LoginApi.json();
        // console.log(resposneApi);
        if (resposneApi.status) {
            toast.success(resposneApi.message, { position: 'top-center' })
            if (resposneApi.role === 'Admin') {
                navigate.push('/admin')
            }
            else {
                navigate.push('/about')
            }

        }
        else {
            toast.error(resposneApi.message, { position: 'top-center' })
        }



    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-md">

                {/* Header Section */}
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#f1671a]">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-sm text-blue-600">
                        Or{' '}
                        <a href="/signup" className="font-medium text-[#58595b] hover:text-[#f1671a]">
                            create a new account
                        </a>
                    </p>
                </div>


                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4 rounded-md shadow-sm">

                       
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={datas.email}
                                onChange={handlechnages}
                                required
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-[#f1671a] bg-white placeholder-gray-500 focus:border-[#f1671a] focus:outline-none sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>


                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    name="password"
                                    type={types ? 'password' : 'text'}
                                    value={datas.password}
                                    onChange={handlechnages}
                                    required
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-[#f1671a] bg-white placeholder-gray-500 focus:border-[#f1671a] focus:outline-none sm:text-sm"
                                    placeholder="••••••••"
                                />

                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                    onClick={() => setTypes(!types)}
                                >
                                    {types ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between text-sm">
                        {/* <p className='text-[#58595b]'>
                            Create Your Account?{" "}
                            <a href="/signup" className="font-medium text-[#f1671a] hover:text-[#58595b]">
                                Sign up
                            </a>
                        </p> */}

                        <a href="#" className="font-medium text-[#f1671a] hover:text-[#58595b]">
                            Forgot your password?
                        </a>
                    </div>


                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
}