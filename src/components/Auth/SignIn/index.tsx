'use client'
import React from 'react';
import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";

export default function SignInLayout() {
    const [datas, setDatas] = useState({ email: '', password: '' })
    const [types, setTypes] = useState(false);

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

                {/* Form Container */}
                <form className="mt-8 space-y-6">
                    <div className="space-y-4 rounded-md shadow-sm">

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-1">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    id="password"
                                    name="password"
                                    type={types?'password':'text'}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 text-[#f1671a] bg-white  placeholder-gray-500 focus:border-indigo-500 focus:outline-none  sm:text-sm"
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

                    {/* Remember Me & Forgot Password Utilities */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    {/* Submit Button */}
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