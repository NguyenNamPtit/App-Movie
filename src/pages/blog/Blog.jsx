import React from 'react';
import BannerBlog from './bannerblog/BannerBlog';
import BlogArea from './blogarea/BlogArea';
import NewsletterArea from '../home/newsletterarea/NewsletterArea';
/*import scss*/
import '../blog/Blog.scss';

const Blog = () => {
  return (
    <div>
      <section className='banner-blog'>
        <BannerBlog/>
      </section>
      <section className='blog-area'>
        <BlogArea/>
      </section>
      <section className='news-letter-area'>
        <NewsletterArea/>
      </section>
    </div>
  );
}

export default Blog;
