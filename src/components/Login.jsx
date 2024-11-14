import React from 'react';

const Login = () => {
    return (
        <div>
            <h1 className='font-semibold mb-4'>Login With</h1>
            <div className='flex flex-col gap-2'>
                <button className="btn border-blue-700 text-xs rounded-none"><i class="text-blue-700 fa-brands fa-google"></i>Login with Google</button>
                <button className="btn border-black text-xs rounded-none"><i class="fa-brands fa-github-alt"></i>Login with Github</button>
            </div>
        </div>
    );
};

export default Login;