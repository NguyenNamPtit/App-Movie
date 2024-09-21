import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import TvShow from "./pages/tvshow/TvShow";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/Profile";
import NoPage from "./pages/NoPage";
import './App.scss';
import { useEffect } from "react";
import { isJsonString } from "./utils";
import { jwtDecode } from "jwt-decode";
import * as UserServices from './services/UserServices'
import { useDispatch } from "react-redux";
import { updateUser } from "./redux/features/userSlide";
import axios from "axios";




function App() {
  const dispatch = useDispatch()

  const handleGetDetailsUser =  async(id, token) =>{
    const res = await UserServices.getDetailsUser(id, token)
    console.log('res', res)
    dispatch(updateUser({...res?.data, access_token:token}))
  }
  
  useEffect(() => {
    const {storageData, decoded} = handleDecode()
      if (decoded?.id) {
        handleGetDetailsUser(decoded.id, storageData);
      }
  }, []); 

  const handleDecode = () =>{
    let storageData = localStorage.getItem('access_token');
    let decoded = {}
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData); 
    }
    return {decoded, storageData}
  }


  UserServices.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const {decoded} = handleDecode()
    if (decoded?.exp < currentTime.getTime() / 1000){
      const data = await UserServices.refreshToken()
      config.headers['token'] = `Bearer ${data?.access_token}`
    }
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/*Dành cho Users*/}
          <Route index element={<Home/>}/>
          <Route path="movie" element={<Movie/>}/>
          <Route path="tvshow" element={<TvShow/>}/>
          <Route path="blog" element={<Blog/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="profile-user" element={<Profile/>}/>
          <Route path="nopages" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
