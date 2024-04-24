'use client'
import { registerService } from "@/service/register,service";
import { redirect } from "next/dist/server/api-utils";
import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
function LoginPage() {
    const router = useRouter()
    async function handleLogin(userLogin){
        const newUserLogin = {
            email : userLogin.get("email"),
            password : userLogin.get("password")
        }
        // console.log("newUser", newUserLogin)
        const res = await signIn('credentials', {
            redirect : false,
            ...newUserLogin,   
        })
        console.log("res", res)
        if(res.status == 200){
            router?.push('/todo-list')
        }else {
            router?.push('/register')
        }
    }
  return (
    <div className="relative">
      <img src="./assets/icons/logo.svg" alt="" className="absolute top-20 left-40"/>
      <div className="flex justify-between w-[80%] mx-auto items-center h-[700px]">
        <form class="max-w-sm mx-auto w-[500px]" action={handleLogin }>
          <h1 className="mb-4 text-2xl">Login</h1>
          <div class="mb-5">
            {/* <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
            <input
              type="email"
              id="email"
              name="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-5">
            {/* <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
            <input
              type="password"
              id="password"
              name="password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required placeholder="Enter Password"
            />
          </div>
          <div class="mb-5 ">
            <button
              className="w-full bg-blue-500 text-white rounded-lg py-2"
              type="submit"
            >
              Login
            </button>
          </div>
          <div class="flex items-start mb-5">
            {/* <div class="flex items-center h-5">
            <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div> */}
            <label
              for="terms"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Didn't have account you ?{" "}
              <a
                href="/register"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                Register
              </a>
            </label>
          </div>
          <button
            type="submit"
            class="text-slate-500 bg-transparent border-solid border-4 w-full py-2 rounded-lg"
          >
            Google
          </button>
        </form>
        <div className="img">
          <img src="./assets/icons/login.svg" alt="" className="h-[600px] w-[400px]"/>
        </div>
      </div>
      <h1 className="absolute left-40 bottom-10">@2024 My Office All Right Reserved</h1>
    </div>
  );
}

export default LoginPage;
