import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import TvShow from "./pages/tvshow/TvShow";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/NoPage";
import './App.scss';
import axios from "axios";
import { useQuery } from "@tanstack/react-query";



function App() {

   // Queries
  // const fetchApi = async () =>{
  //   const res = await axios.get(`http://localhost:3000/api/film/get-all`)
  //   return res.data
  // }
  // const query = useQuery({ queryKey: ['todos'], queryFn: fetchApi })
  // console.log('query',query)
  
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
          <Route path="nopages" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
