import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
//import component 
import SigninForm from '../SignIn/SigninForm';
import * as UserServices from '../../services/UserServices'
//import scss
import '../SignUp/SignupForm.scss'


    //showsignin
const SignupForm = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [hiddensignup, sethiddensignup] = useState(true);
    
    const toggleLoginForm = () =>{
        setShowLoginForm(!showLoginForm);
        sethiddensignup(!hiddensignup)   
    }

    //validate
    const [password, setPassword] = useState('');
    const {register, handleSubmit, formState: { errors},} = useForm({
      defaultValues:{
        name: "",
        email: "",
        password:"",
        confirmPassword:"",
      },
    }); 

    const mutation = useMutation({
      mutationFn: data => UserServices.signupUser(data)
    })
    console.log('mutation',mutation)

    const handleSignUp = (data) => {
      const {name, email, password , confirmPassword} = data;
      mutation.mutate({
        name,
        email,
        password,
        confirmPassword,
      })
    }



    const onSubmit = (data) =>{
      console.log(data);
    }
  return (
    <div>
        <div className='sign-un' style={{ display: hiddensignup ? 'block' : 'none' }}>
      <div className='title-signin'>
            <h1>Mov<span>flx</span></h1>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className='signin-input'>
            <div className='input-username'>
                <input type="text" placeholder='User Name' {...register('name', {required: true})}/>
            </div>
            {errors.username && <span className='error' >This field is required</span>}
            <div className='input-password'>
                <input type="email" placeholder='Email' {...register('email', {required: true, pattern: /^\S+@\S+$/i})}/>
            </div>
            {errors.email && <span className='error' >This field is required and must be a valid email</span>}
            <div className='input-password'>
                <input type="password" placeholder='Password' {...register('password', {required: true, minLength: 6})}  onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {errors.password && errors.password.type === 'required' && <span className='error'>This field is required</span>}
            {errors.password && errors.password.type === 'minLength' && <span className='error'>Password must be at least 6 characters</span>}
            <div className='input-password'>
                <input type="password" placeholder='Confirm Password' {...register('confirmPassword', {required: true, validate: (value) => value === password})}/>
            </div>
            {errors.confirmPassword && errors.confirmPassword.type === 'required' && <span className='error'>This field is required</span>}
            {errors.confirmPassword && errors.confirmPassword.type === 'validate' && <span className='error'>Passwords do not match</span>}
        </div>
        <button type='submit' className='btn-signin' onClick={handleSubmit(handleSignUp)}>SIGN UP</button>
        <div className='btn-signup' onClick={toggleLoginForm}>SIGN IN</div>
      </form>
      
    </div>
    <div>
        {showLoginForm && <SigninForm/>}
    </div>
    </div>
  );
}

export default SignupForm;
