
import React from 'react'
import {signIn} from 'next-auth/react'
import { registerService } from '@/service/register,service';
import { redirect } from 'next/navigation';
function RegisterPage() {
    // define handle register
    async function handleRegister(userInfo){
        'use server'
        // console.log("user Info", userInfo)
        const newUserInfo = {
                firstname : userInfo.get("firstName"),
                lastname : userInfo.get("lastName"),
                email : userInfo.get("email"),
                gender: userInfo.get("gender"),
                profile_url : "String",
                password : userInfo.get("password"),
        }
        console.log(newUserInfo)
        const res = await registerService(newUserInfo);
        if(res?.status === 200){
            redirect('/login')
        }
    }

  return (
    <div className='relative'>
      <img src="./assets/icons/logo.svg" alt="" className="absolute top-20 left-40"/>
      <div className="flex justify-between w-[80%] mx-auto items-center h-[700px]">
        <form className="max-w-sm mx-auto w-[500px]" action={handleRegister} method='post'>
          <div className="mb-5 flex justify-between">
            <div>
                <label for="text" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input
                    type="text"
                    id="text"
                    name='firstName'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Entet your name"
                    required
                />
            </div>
            <div>
                <label for="text" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input
                    type="text"
                    id="text"
                    name='lastName'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required placeholder="Last Name"
                />
            </div>
          </div>
           <div className="mb-5 flex justify-between">
            <div>
                <label for="email" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input
                    type="email"
                    id="email"
                    name='email'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Email"
                    required
                />
            </div>
            <div>
                <label for="password" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                <input
                    type="gender"
                    id="gender"
                    name='gender'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Gender"
                    required
                />
            </div>
          </div>

          <div className="mb-5 flex justify-between">
            <div>
                <label for="text" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                    type="password"
                    id="paassword"
                    name='password'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Entet your password"
                    required
                />
            </div>
            <div>
                <label for="text" className="block mb-3 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                    type="password"
                    id="password"
                    name='conform_password'
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required placeholder="Enter your password"
                />
            </div>
          </div>
          <button className='bg-blue-600 text-white p-2 rounded-lg' type='submit'>Sign Up</button>
        </form>
        <div className="img">
          <img src="./assets/icons/sign-up.svg" alt="" className="h-[600px] w-[400px]"/>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
