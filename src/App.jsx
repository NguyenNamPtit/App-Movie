import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import TvShow from "./pages/tvshow/TvShow";
import Blog from "./pages/Blog";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/NoPage";
import './App.scss';



function App() {
 

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
