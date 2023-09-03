import React from 'react';
import BannerBlog from './bannerblog/BannerBlog';
import BlogArea from './blogarea/BlogArea';
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
    </div>
  );
}

export default Blog;
