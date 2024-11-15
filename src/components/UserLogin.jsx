import React from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
             <div className="card bg-base-100 w-full max-w-lg rounded shrink-0 ">
                <form className="card-body">
                    <h1 className='text-center py-3 font-bold text-xl'>Login your Account</h1>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                    <p className='text-center py-2'>Don't have an accout <Link to='/auth/register'><span className='text-rose-500'>Register here</span></Link> </p>
                </form>
                </div>
        </div>
    );
};

export default UserLogin;