import React from 'react';
import HomeSlider from './sliderhome/HomeSlider';
import UpcommingMovie from './upcommingmovie/UpcommingMovie';
import OurServices from './ourservices/OurServices';
import TopRatedMovie from './topratedmovie/TopRatedMovie';
import LiveArea from './livearea/LiveArea';
import BestTvSeries from './besttvseries/BestTvSeries';

/*import scss*/
import '../home/Home.scss';
import NewsletterArea from './newsletterarea/NewsletterArea';


const Home = () => {
  return (
    <div>
      <section>
        <HomeSlider/>
      </section>
      <section className='upcomming-movie'>
        <UpcommingMovie/>
      </section>
      <section className='our-services'>
        <OurServices/>
      </section>
      <section className='top-rated-movie'>
        <TopRatedMovie/>
      </section>
      <section className='live-area'>
        <LiveArea/>
      </section>
      <section className='tv-series-area'>
        <BestTvSeries/>
      </section>
      <section className='newsletter-area'>
        <NewsletterArea/>
      </section>
    </div>
  );
}

export default Home;
