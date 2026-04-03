import React, { useRef, useState } from 'react';
import checkValidData from '../utils/validate';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const signIn = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
    }

    const toggleSignInButton = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <div>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw'
                className='w-screen h-screen object-cover fixed' />
            </div>
            <form className='w-3/12 p-12 bg-black bg-opacity-80 absolute my-28 mx-auto left-0 right-0 flex flex-col gap-4 text-white'>
                <h1 className='font-bold text-2xl'>{isSignInForm ? "Sign in" : "Sign up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Name' className='p-2 rounded-sm outline-none bg-gray-800'/>}
                <input ref={email} type="text" placeholder='Email or phone number' className='p-2 rounded-sm outline-none bg-gray-800' />
                <input ref={password} type="password" placeholder='Password' className='p-2 rounded-sm outline-none bg-gray-800' />
                <p className='text-red-500 font-bold text-md'>{errorMessage}</p>
                <button type="button" className='bg-red-700 text-white px-4 py-2 rounded-sm' onClick={signIn}>{isSignInForm ? "Sign in": "Sign up"}</button>
                <p>{!isSignInForm? "Already a user? ": "New to Netflix? "}<a href="#" onClick={toggleSignInButton} style={{cursor: 'pointer'}}>{!isSignInForm ? "Sign in now" : "Sign up now"}</a></p>
            </form>
        </div>
    )
}

export default Login;