import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const [nameError, setNameError] = useState("");
    const {createUser, setUser, updateUser} = use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
      //  console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError("name should be more then5 character")
            return
        }else{
            setNameError("")
        }
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
      //  console.log({name,email, password, photo})
        createUser(email, password)
        .then(result =>{
            const user = result.user;
           // console.log(user)
           updateUser({displayName: name, photoURL: photo})
           .then(()=>{
               setUser({...user,displayName: name, photoURL: photo });
               navigate("/")
           })
           .catch(error => {
              console.log(error)
              setUser(user);
           })
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage, errorCode);
        })
    }
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h1 className='font-semibold text-3xl text-center'>Register your account</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                             {/* Name */}
                            <label className="label" >Name</label>
                            <input type="text" name="name" className="input" placeholder="Full Name" required />
                            {/* email */}
                            <label className="label" name="email">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required/>
                            {nameError && <p className='text-xs text-error'>{nameError}</p>}
                            {/* photo url */}
                            <label className="label" name="email">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo url" required/>
                            {/* password */}
                            <label className="label">set Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" required/>
                            
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='text-center text-primary font-semibold'>Already have an account ? <Link to="/auth/login" className='text-secondary hover:underline'>Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;