import axios from "axios";

export const getAllFilm = async (data) => {
    const res = await axios.get(`http://localhost:3080/api/film/get-all`, data);
    return res.data;
  };