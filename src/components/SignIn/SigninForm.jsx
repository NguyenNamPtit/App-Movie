import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
//import component
import SignupForm from '../SignUp/SignupForm';
import '../SignIn/SigninForm.scss'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import * as UserServices from '../../services/UserServices'
import Loading from '../Loading/Loading';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setShowOverlay } from '../../redux/features/overLaySlide';
import Overlay from '../Overlay/Overlay';
import { useModal } from '../../Contexts/useModal';
import { jwtDecode } from "jwt-decode";
import { updateUser } from '../../redux/features/userSlide';

const SigninForm = () => {
  const { modalSigninVisible, setModalSigninVisible } = useModal();
  const { modalSignupVisible, setModalSignupVisible } = useModal();
  const { showOverlay } = useSelector((state) => state.overlay);
  const dispatch = useDispatch();
  //show signup
  const handleShowsignup = () => {
    setModalSigninVisible(true);
    setModalSignupVisible(true)
  }
  //validate
  const { register, handleSubmit, formState: { errors }, } = useForm({      
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //
  const mutation = useMutation({
    mutationFn: data => UserServices.loginUser(data)
  })
  const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      const body = document.querySelector('body');
      body.style.overflow = 'auto';
      toast.success('Logged in successfully')
      setModalSignupVisible(false);
      setModalSigninVisible(false);
      dispatch(setShowOverlay(!showOverlay));
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      console.log('data', data)
      if(data?.access_token){
        const decoded = jwtDecode(data?.access_token)
        console.log('decode', decoded)
        if(decoded?.id){
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }

    } else if (isError) {
      toast.error("Login failed")
    }
  }, [isSuccess, isError])

  const handleGetDetailsUser =  async(id, token) =>{
      const res = await UserServices.getDetailsUser(id, token)
      console.log('res', res)
      dispatch(updateUser({...res?.data, access_token:token}))
  }

  const handleSignIn = (data) => {
    const { email, password } = data;
    mutation.mutate({
      email,
      password,
      
    })
  }
  const onSubmit = (data) => {
    console.log('data', data);
  }
 


  return (
    <div>
      <div className='sign-in' style={{ display: modalSigninVisible ? 'block' : 'none' }}>
        <div className='title-signin' >
          <h1>Mov<span>flx</span></h1>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className='signin-input'>
            <div className='input-email'>
              <input type="email" placeholder='Email' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />

            </div>
            {errors.email && <span className='error' >This field is required and must be a valid email</span>}
            <div className='input-password'>
              <input type="password" placeholder='Password' {...register('password', { required: true, minLength: 6 })} />
            </div>
            {errors.password && errors.password.type === 'required' && <span className='error'>This field is required</span>}
            {errors.password && errors.password.type === 'minLength' && <span className='error' >Password must be at least 6 characters</span>}
          </div>
          {data?.status === 'ERR' && <p className='error-be'>{data?.message}</p>}
          <Loading isLoading={isLoading}>
            <button className='btn-signin' variant="primary" type="submit" onClick={handleSubmit(handleSignIn)}>SIGN IN</button>
          </Loading>
          <div className='btn-signup' onClick={handleShowsignup}>SIGN UP</div>
        </form>
      </div>
        {modalSignupVisible && <SignupForm />}
    </div>

  );
}

export default SigninForm;
