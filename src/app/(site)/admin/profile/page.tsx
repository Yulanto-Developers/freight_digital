'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function ProfileSettingsPage() {

    // const [email, setEmail] = useState();
    const [newemail, setnewEmail] = useState({ newEmail: '', password: '' });
    // const [currentPassword, setCurrentPassword] = useState('');
    const [passwordData, setPasswordData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [profileData, setProfileData] = useState({
        fullname: '',
        phone: '',
        dob: '',
        address: ''
    });


    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    useEffect(() => {
        // console.log('eeeee');

        Getemail();
    }, [])


    async function Getemail() {
        const getEmail = await fetch('/api/profile', {
            method: 'GET',
            credentials: 'include'
        });
        const GetEmailApi = await getEmail.json();
        // console.log(GetEmailApi);
        if (GetEmailApi.status) {
            // console.log(GetEmailApi.message.username);
            setnewEmail({
                newEmail: GetEmailApi.message.username,
                password: ''
            });
            setProfileData({
                fullname: GetEmailApi.message.fullname,
                phone: GetEmailApi.message.phone,
                dob: GetEmailApi.message.dob?.split('T')[0] || '',
                address: GetEmailApi.message.address
            });
        }

    }


    //emaul chnage function

    function ChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setnewEmail((prev) => ({
            ...prev, [name]: value
        }))
    }
    async function sumbitEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log(newemail);
        const chnageEmailApi = await fetch('/api/profile',
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ action: "updateEmail", email: newemail.newEmail, password: newemail.password })

            }
        )
        const emailResposne = await chnageEmailApi.json();
        // console.log(emailResposne);
        try {
            if (emailResposne.status) {
                toast.success(emailResposne.message, { position: 'top-center' });
            }
            else {
                toast.error(emailResposne.message, { position: 'top-center' });
            }
        }
        catch {
            toast.error('Something went wriong', { position: 'top-center' });
        }

    }


    // chnage the profile
    function changeProfile(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setProfileData((prev) => ({
            ...prev,
            [name]: value
        }));
    }


    async function submitProfile(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        const response = await fetch('/api/profile', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: 'updateProfile',
                fullname: profileData.fullname,
                phone: profileData.phone,
                dob: profileData.dob,
                address: profileData.address
            })
        });

        const profileResponse = await response.json();

        // console.log(result);

        if (profileResponse.status) {
            toast.success(profileResponse.message, { position: 'top-center' });
        } else {
            toast.error(profileResponse.message, { position: 'top-center' });
        }
    }


    // passowrd chnage function
    function changePassword(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setPasswordData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    async function submitPassword(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (passwordData.newPassword !== passwordData.confirmPassword) {
            toast('New Password and Confirm Password do not match', {
                icon: '⚠️',
                style: {
                    background: '#fff3cd',
                    color: '#856404',
                    border: '1px solid #ffeeba',
                    borderRadius: '8px',
                    fontWeight: '500',
                    fontSize: '14px',
                    padding: '12px 20px',
                }
            });
            // toast.warning('');
            return;
        }

        const response = await fetch('/api/profile', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                action: "updatePassword",
                oldPassword: passwordData.oldPassword,
                newPassword: passwordData.newPassword
            })
        });

        const passwordResposne = await response.json();
        // console.log(result);
        try {
            if (passwordResposne.status) {
                toast.success(passwordResposne.message, { position: 'top-center' });
            }
            else {
                toast.error(passwordResposne.message, { position: 'top-center' });
            }
        }
        catch {
            toast.error('Something went wriong', { position: 'top-center' });
        }
    }



    const EyeIcon = ({ visible }: { visible: boolean }) => (
        visible ? (

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
        ) : (

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    );

    return (
        <div className="max-w-4xl mx-auto space-y-8">



            <div className="grid grid-cols-1 gap-8">

                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
                        <p className="text-xs text-gray-500 mt-0.5">Update the system communication and login access email string.</p>
                    </div>

                    <form className="p-6 space-y-4 max-w-2xl mx-auto" onSubmit={submitProfile}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Full Name
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        name="fullname"
                                        value={profileData.fullname}
                                        onChange={changeProfile}
                                        className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                            </div>


                            <div>
                                <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Phone Number
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="tel"

                                        name="phone"
                                        value={profileData.phone}
                                        onChange={changeProfile}
                                        className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="+1 (555) 000-0000"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dob" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Date of Birth
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="date"
                                        value={profileData.dob}
                                        onChange={changeProfile}
                                        className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="address" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Permanent Address
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 pt-3 flex items-start pointer-events-none text-gray-400">

                                        <svg xmlns="http://www.w3.org/2000/xl" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <textarea
                                        name='address'
                                        value={profileData.address}
                                        onChange={changeProfile}
                                        rows={3}
                                        className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none resize-none"
                                        placeholder="123 Street Name, City, Country"
                                        required
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="pt-2 flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-2.5 bg-[#f1671a] text-white rounded-xl text-sm font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm shadow-indigo-100"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">Email Address</h2>
                        <p className="text-xs text-gray-500 mt-0.5">Update the system communication and login access email string.</p>
                    </div>

                    <form className="p-6 space-y-4" onSubmit={sumbitEmail}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div className="">
                                <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Account Email
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                                        </svg>
                                    </div>
                                    <input
                                        type="email"
                                        name="newEmail"

                                        value={newemail.newEmail}
                                        onChange={ChangeEmail}
                                        className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="">
                                <label htmlFor="currentPassword" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Current Password
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <input
                                        type={showCurrent ? 'text' : 'password'}
                                        name='password'
                                        value={newemail.password}
                                        onChange={ChangeEmail}
                                        className="block w-full pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrent(!showCurrent)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                        aria-label={showCurrent ? 'Hide password' : 'Show password'}
                                    >
                                        <EyeIcon visible={showCurrent} />
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className="pt-2 flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2.5 bg-[#f1671a] text-white rounded-xl text-sm font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm shadow-indigo-100"
                            >
                                Save Email Changes
                            </button>
                        </div>
                    </form>
                </div>



                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-semibold text-gray-900">Security Credentials</h2>
                        <p className="text-xs text-gray-500 mt-0.5">Ensure your administrative security footprints match corporate parameters.</p>
                    </div>

                    <form className="p-6 space-y-5" onSubmit={submitPassword}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">


                            <div className="md:col-span-2 max-w-md">
                                <label htmlFor="currentPassword" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Current Password
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <input
                                        type={showCurrent ? 'text' : 'password'}
                                        name="oldPassword"
                                        value={passwordData.oldPassword}
                                        onChange={changePassword}


                                        className="block w-full pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowCurrent(!showCurrent)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                        aria-label={showCurrent ? 'Hide password' : 'Show password'}
                                    >
                                        <EyeIcon visible={showCurrent} />
                                    </button>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="newPassword" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    New Password
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <input
                                        type={showNew ? 'text' : 'password'}
                                        name="newPassword"
                                        value={passwordData.newPassword}
                                        onChange={changePassword}


                                        className="block w-full pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowNew(!showNew)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                        aria-label={showNew ? 'Hide password' : 'Show password'}
                                    >
                                        <EyeIcon visible={showNew} />
                                    </button>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="confirmPassword" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                                    Confirm New Password
                                </label>
                                <div className="relative rounded-xl shadow-sm">
                                    <input
                                        type={showConfirm ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={passwordData.confirmPassword}
                                        onChange={changePassword}
                                        className="block w-full pl-4 pr-11 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirm(!showConfirm)}
                                        className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                                        aria-label={showConfirm ? 'Hide password' : 'Show password'}
                                    >
                                        <EyeIcon visible={showConfirm} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex justify-end">
                            <button
                                type="submit"
                                className="px-4 py-2.5 bg-[#f1671a] text-white rounded-xl text-sm font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-sm shadow-indigo-100"
                            >
                                Update Security Key
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}