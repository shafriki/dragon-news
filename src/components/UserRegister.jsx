import React from 'react';
import { Link } from 'react-router-dom';

const UserRegister = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
             <div className="card bg-base-100 w-full max-w-lg rounded shrink-0 ">
                <form className="card-body">
                    <h1 className='text-center py-3 font-bold text-xl'>Register your Account</h1>

                    {/* name input */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name</span>
                    </label>
                    <input type="text" name='name' placeholder="user name" className="input input-bordered" required />
                    </div>

                    {/* name input */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                    </div>

                    {/* email input */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>

                    {/* password input */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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

export default UserRegister;