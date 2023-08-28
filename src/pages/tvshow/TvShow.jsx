import React from 'react';
import BannerTvShow from './bannertvshow/BannerTvShow';
import TvShowRelease from './tvshowrelease/TvShowRelease';
import NewsletterArea from '../home/newsletterarea/NewsletterArea';
/*import scss*/
import '../tvshow/TvShow.scss';

const TvShow = () => {
  return (
    <div>
      <section className='banner-tv-show'>
        <BannerTvShow/>
      </section>
      <section className='tv-show-release'>
        <TvShowRelease/>
      </section>
      <section className='news-letter-area'>
        <NewsletterArea/>
      </section>
    </div>
  );
}

export default TvShow;
