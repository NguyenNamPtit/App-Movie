import React from 'react';
import Banner from './banner/Banner';
import NewReleaseMovies from './newreleasemovies/NewReleaseMovies'
import NewsletterArea from '../home/newsletterarea/NewsletterArea';
/*import scss*/
import '../movie/Movie.scss';


const Movie = () => {
  return (
    <div>
      <section className='main-banner'>
        <Banner/>
      </section>
      <section className='new-release-movie'>
        <NewReleaseMovies/>
      </section>
      <section className='news-letter-area'>
        <NewsletterArea/>
      </section>
    </div>
  );
}

export default Movie;
