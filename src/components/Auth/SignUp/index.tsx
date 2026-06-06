"use client";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
    const [signup, setSignup] = useState({ fname: '', email: '', phone: '', dob: '', address: '', pass: '', conf_pass: '', rememberMe: '' })
    const [profile, setProfile] = useState<File | null>(null);
    const [profilePreview, setProfilePreview] = useState<string>();

    function handleImage(e: React.ChangeEvent<HTMLInputElement >) {
        const file = e.target.files?.[0];
        const sizeByte = 3145728
        if (file) {
            if (file.size <= sizeByte) {
                setProfile(file);
                setProfilePreview(URL.createObjectURL(file));
            }
            else {
                console.log('file size is greater than 3 mb');
                toast.error('file size is greater than 3 mb')
            }
        }
    }

    function handlechanges(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;

        if (name === "phone" && !/^\d*$/.test(value)) {
            return;
        }

        setSignup((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log(signup);

        if (signup.pass === signup.conf_pass) {
            const sData = new FormData();
            sData.append('fullname', signup.fname);
            sData.append('email', signup.email);
            sData.append('dob', signup.dob);
            sData.append('phone', signup.phone);
            sData.append('address', signup.address);
            sData.append('password', signup.pass);
            if (profile) {
                sData.append('profile', profile);
            }
            const signupApi = await fetch('/api/register', {
                method: 'POST',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: sData
            })

            const res_signup = await signupApi.json();
            console.log(res_signup);

            if (res_signup.status) {
                toast.success(res_signup.message, { position: 'top-center' });
            }
            else {
                toast.error(res_signup.message, { position: 'top-center' });
            }


        }
        else {
            console.log('p mistach');
        
            toast.error('Password Mistach', { position: 'top-center' });
        }

    }


    return (
        <div className="flex items-center justify-center bg-white min-h-screen px-4 py-6">

            <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-xl border   text-[#58595b]  transition-all">


                <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                    <div className="flex items-center gap-2.5 font-bold text-base text-[#58595b] ">
                        <span className="tracking-wider uppercase text-2xl text-[#f1671a]">Freight Digital</span>
                    </div>
                    <div className="text-right">
                        <h2 className="text-2xl font-black tracking-tight text-[#f1671a] uppercase">
                            Create Account
                        </h2>
                        <p className="text-xs text-[#58595b]/70  font-medium">
                            Join our community today
                        </p>
                    </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>


                    <div>
                        <div className="flex items-center mb-3">
                            <span className="text-[11px] font-bold tracking-wider text-gray-400  uppercase whitespace-nowrap mr-3">
                                Personal Information
                            </span>
                            <hr className="w-full border-gray-100 " />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">

                            <div className="md:col-span-8 flex flex-col justify-between space-y-3">


                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-[#f1671a] mb-1.5">Full Name</label>
                                        <div className="">
                                            <input
                                                type="text"
                                                name="fname"
                                                placeholder="John Doe"
                                                onChange={handlechanges}
                                                required
                                                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white px-3 py-2.5 text-sm text-[#f1671a] outline-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#f1671a] mb-1.5">Email Address</label>
                                        <div className="">

                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                onChange={handlechanges}
                                                required
                                                className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm  outline text-[#f1671a]-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-[#f1671a] mb-1.5">Date of Birth</label>
                                        <div className="">

                                            <input
                                                type="date"
                                                name="dob"
                                                required
                                                onChange={handlechanges}
                                                className="w-full rounded-lg border border-gray-300  bg-white px-3 py-2.5 text-sm text-[#f1671a]  outline-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-[#f1671a] mb-1.5">Mobile Number</label>
                                        <div className="">

                                            <input
                                                type="text"
                                                name="phone"
                                                value={signup.phone}
                                                onChange={handlechanges}
                                                maxLength={10}
                                                placeholder="1234567890"
                                                className="w-full rounded-lg border border-gray-300  bg-white px-3 py-2.5 text-sm text-[#f1671a] outline-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="md:col-span-4 flex flex-col">
                                <label className="block text-xs font-bold text-gray-400 dark:text-gray-500 mb-1.5">
                                    Profile Image
                                </label>

                                <div className="flex-1 min-h-[140px] border border-dashed border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden relative group">

                                    {profilePreview ? (
                                        <>
                                            <img
                                                src={profilePreview}
                                                alt="Profile Preview"
                                                className="w-full h-[140px] object-cover"
                                            />

                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                                                <span className="px-3 py-1 bg-[#f1671a] text-[10px] uppercase tracking-wider font-bold text-white rounded">
                                                    Change Image
                                                </span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="w-full h-[140px] bg-gray-50/50 dark:bg-gray-800/10 p-3 flex flex-col items-center justify-center">
                                            <div className="w-10 h-10 rounded-full border border-dashed border-[#f1671a] bg-white dark:bg-gray-800 flex items-center justify-center text-base mb-2 text-gray-400 shadow-sm">
                                                📷
                                            </div>

                                            <span className="px-3 py-1 bg-[#f1671a] text-[10px] uppercase tracking-wider font-bold text-white rounded shadow-md shadow-[#f1671a]/10">
                                                Upload
                                            </span>
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        name="profileImage"
                                        accept="image/*"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"

                                        onChange={handleImage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className="flex items-center mb-2">
                            <span className="text-[11px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase whitespace-nowrap mr-3">
                                Address Details
                            </span>
                            <hr className="w-full border-gray-100 dark:border-gray-800" />
                        </div>
                        <textarea
                            name="address"
                            placeholder="Full Address (Street, Apt, Suite, City, State)"
                            onChange={handlechanges}
                            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2.5 text-sm text-[#f1671a] outline-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                        />
                    </div>

                    <div>
                        <div className="flex items-center mb-2">
                            <span className="text-[11px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase whitespace-nowrap mr-3">
                                Account Security
                            </span>
                            <hr className="w-full border-gray-100 dark:border-gray-800" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[#f1671a] mb-1.5">Password</label>
                                <div className="">

                                    <input
                                        type="password"
                                        name="pass"
                                        placeholder="••••••••"
                                        onChange={handlechanges}
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white px-3 py-2.5 text-sm text-[#f1671a] outline-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#f1671a] mb-1.5">Confirm Password</label>
                                <div className="">

                                    <input
                                        type="password"
                                        name="conf_pass"
                                        placeholder="••••••••"
                                        onChange={handlechanges}
                                        required
                                        className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2.5 text-sm text-[#f1671a] outline-none transition focus:border-[#f1671a] focus:ring-1 focus:ring-[#f1671a]/30"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center">
                            <input
                                id="rememberMe"
                                name="rememberMe"
                                type="checkbox"
                                value="1"
                                className="h-4 w-4 rounded border-gray-300 bg-white text-[#f1671a] focus:ring-[#f1671a] cursor-pointer"
                                onChange={handlechanges}
                                required
                            />
                            <label htmlFor="rememberMe" className="ml-2 block text-xs font-medium text-gray-500 dark:text-gray-400 cursor-pointer select-none">
                                Remember Me
                            </label>
                        </div>

                        <p className="text-[11px] text-gray-400">
                            By registering, you agree to our{" "}
                            <a href="#!" className="text-[#f1671a] font-semibold hover:underline">Privacy Policy</a>.
                        </p>
                    </div>


                    <div className="pt-1">
                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-[#f1671a] py-3 text-sm font-bold text-white shadow-lg shadow-[#f1671a]/20 uppercase tracking-wider transition-all duration-150 hover:bg-[#d65612] hover:shadow-none active:scale-[0.99]"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400 font-medium">
                    <p>
                        Already have an account?{" "}
                        <Link href="/signin" className="font-bold text-[#f1671a] hover:underline ml-0.5 transition">
                            Sign In
                        </Link>
                    </p>
                    <div className="flex gap-4">
                        <a href="#!" className="hover:text-[#f1671a] transition">Terms & Conditions</a>
                        <a href="#!" className="hover:text-[#f1671a] transition">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;