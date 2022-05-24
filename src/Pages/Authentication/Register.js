import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../Pages/Images/login.webp';
import './Login.css'
import google from '../../Pages/Images/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
      let signInError;

      const [token]=useToken(user || gUser);
      const navigate=useNavigate();


      if (error || gError || updateError) {
          signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }
  
      if (loading || gLoading || updating) {
          return <Loading></Loading>;
      }
      const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name});
        
    
    };

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl lg:mr-60">
            <figure><img className='vector' src={login} alt="Album" /></figure>
            <div className="cardr w-96  bg-base-100 shadow-xl">
                <div className="card-body card2  pattern items-center text-center">
                    <h2 className="card-title text-3xl card3">Register</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                                        message: '6 to 16 character,at least one number and one special character'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <input className='btn w-full btn-primary text-white mt-5' type="submit" value='Register' />
                    </form>
                    <label className="label flex justify-end">
                        <p>Already have an account?</p>
                        <Link to='/login'><button className="btn btn-xs ml-6">Login</button></Link>

                    </label>

                    <div className='social'>
                        <p className='mb-2'>Login with Social Account</p>
                        <button onClick={() => signInWithGoogle()} className='flex border-2 rounded-lg w-48 pattern border-gray-800 h-12 '>
                            <img className='mt-2 mx-5 ' style={{ width: '30px' }} src={google} alt=''></img>
                            <span className='mt-2'>Google Sign In</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;