import React from "react";
import HomeSlider from "./sliderhome/HomeSlider";
import UpcommingMovie from "./upcommingmovie/UpcommingMovie";
import OurServices from "./ourservices/OurServices";
import TopRatedMovie from "./topratedmovie/TopRatedMovie";
import LiveArea from "./livearea/LiveArea";
import BestTvSeries from "./besttvseries/BestTvSeries";
import * as FilmServices from "../../services/FilmServices";
/*import scss*/
import "../home/Home.scss";
import NewsletterArea from "./newsletterarea/NewsletterArea";
//
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const fetchAllFilm = async () => {
    const res = await FilmServices.getAllFilm();
    return res;
  };

  const { isSuccess, data: films } = useQuery(["film"], fetchAllFilm, {
    retry: 3,
    retryDelay: 1000,
  });
  // console.log("data", films);
  return (
    <div>
      <section>
        <HomeSlider />
      </section>
      <section className="upcomming-movie">
        <UpcommingMovie films={films} />
      </section>
      <section className="our-services">
        <OurServices />
      </section>
      <section className="top-rated-movie">
        <TopRatedMovie films={films} />
      </section>
      <section className="live-area">
        <LiveArea />
      </section>
      <section className="tv-series-area">
        <BestTvSeries />
      </section>
      <section className="newsletter-area">
        <NewsletterArea />
      </section>
    </div>
  );
};

export default Home;
