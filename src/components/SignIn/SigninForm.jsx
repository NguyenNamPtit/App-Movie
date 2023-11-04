import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
//import component
import SignupForm from '../SignUp/SignupForm';

import '../SignIn/SigninForm.scss'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as UserServices from '../../services/UserServices'


const SigninForm = () => {
    //show signup
    const [showsignup, setshowsignup] = useState(false);
    const [hiddensignin, sethiddensignin] = useState(true);
    const Showsignup = () =>{
        setshowsignup(!showsignup);
        sethiddensignin(!hiddensignin);
    }
    //validate
    const {register, handleSubmit, formState: { errors},} = useForm({
      defaultValues:{
        email: "",
        password:"",
      },
    });

    //
    const mutation = useMutation({
      mutationFn: data => UserServices.loginUser(data)
    })
    console.log('mutation',mutation)

    const handleSignIn = (data) => {
      const { email, password } = data;
      mutation.mutate({
        email,
        password
      })
    }
    const onSubmit = (data) =>{
      console.log(data);

    }

  return (
    <div>
        <div className='sign-in' style={{ display: hiddensignin ? 'block' : 'none' }}>
      <div className='title-signin' >
            <h1>Mov<span>flx</span></h1>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='signin-input'>
            <div className='input-email'>
                <input type="email" placeholder='Email' {...register('email', {required: true, pattern: /^\S+@\S+$/i})}  />
                
            </div>
            {errors.email && <span className='error' >This field is required and must be a valid email</span>}
            <div className='input-password'>
                <input type="password" placeholder='Password' {...register('password', {required: true, minLength: 6})} />
            </div>
            {errors.password && errors.password.type === 'required' && <span className='error'>This field is required</span>}
            {errors.password && errors.password.type === 'minLength' && <span className='error' >Password must be at least 6 characters</span>}
        </div>
        <button className='btn-signin' variant="primary" type="submit" onClick={handleSubmit(handleSignIn)}>SIGN IN</button>
        <div className='btn-signup' onClick={Showsignup}>SIGN UP</div>
      </form>
      
    </div>
    <div>
        {showsignup && <SignupForm/>}
        
    </div>
   
    </div>
    
  );
}

export default SigninForm;
