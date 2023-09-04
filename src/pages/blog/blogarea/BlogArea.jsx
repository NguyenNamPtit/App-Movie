import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SearchIcon from '@mui/icons-material/Search';
/*import scss*/
import '../blogarea/BlogArea.scss';
const BlogArea = () => {
  return (
    <Container>
        <Row>
            <Col lg={8}>
                <div className='blog-post-item'>
                    <div className='blog-post-thumb'>
                        <Link to=''>
                            <img src="../../../public/image/blog_thumb01.jpg" />
                        </Link>
                    </div>
                    <div className='blog-post-content'>
                        <span className='date'>
                            <AccessTimeIcon/>
                            10 Mar 2022
                        </span>
                        <h2 className='title'>
                            <Link to=''>
                            Your Free Movie Streaming Purposes
                            </Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id iste repellat! Asperiores ducimus ab veritatis, explicabo neque exercitationem natus laboriosam reprehenderit corrupti saepe? Ex dolorem tenetur repudiandae illum delectus.
                        </p>
                        <div className='blog-post-meta'>
                            <ul>
                                <li>
                                    <PersonOutlineIcon/>
                                    by Admin
                                </li>
                                <li className='like-post'>
                                    <ThumbUpOffAltIcon/>
                                    63
                                </li>
                                <li className='comments-post'>
                                    <ChatBubbleOutlineIcon/>
                                    12 Comments
                                </li>
                            </ul>
                            <div className='read-more'>
                                <Link to=''>
                                    Read More
                                    <KeyboardDoubleArrowRightIcon/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='blog-post-item'>
                    <div className='blog-post-thumb'>
                        <Link to=''>
                            <img src="../../../public/image/blog_thumb01.jpg" />
                        </Link>
                    </div>
                    <div className='blog-post-content'>
                        <span className='date'>
                            <AccessTimeIcon/>
                            10 Mar 2022
                        </span>
                        <h2 className='title'>
                            <Link to=''>
                            Your Free Movie Streaming Purposes
                            </Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id iste repellat! Asperiores ducimus ab veritatis, explicabo neque exercitationem natus laboriosam reprehenderit corrupti saepe? Ex dolorem tenetur repudiandae illum delectus.
                        </p>
                        <div className='blog-post-meta'>
                            <ul>
                                <li>
                                    <PersonOutlineIcon/>
                                    by Admin
                                </li>
                                <li className='like-post'>
                                    <ThumbUpOffAltIcon/>
                                    63
                                </li>
                                <li className='comments-post'>
                                    <ChatBubbleOutlineIcon/>
                                    12 Comments
                                </li>
                            </ul>
                            <div className='read-more'>
                                <Link to=''>
                                    Read More
                                    <KeyboardDoubleArrowRightIcon/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='blog-post-item'>
                    <div className='blog-post-thumb'>
                        <Link to=''>
                            <img src="../../../public/image/blog_thumb01.jpg" />
                        </Link>
                    </div>
                    <div className='blog-post-content'>
                        <span className='date'>
                            <AccessTimeIcon/>
                            10 Mar 2022
                        </span>
                        <h2 className='title'>
                            <Link to=''>
                            Your Free Movie Streaming Purposes
                            </Link>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id iste repellat! Asperiores ducimus ab veritatis, explicabo neque exercitationem natus laboriosam reprehenderit corrupti saepe? Ex dolorem tenetur repudiandae illum delectus.
                        </p>
                        <div className='blog-post-meta'>
                            <ul>
                                <li>
                                    <PersonOutlineIcon/>
                                    by Admin
                                </li>
                                <li className='like-post'>
                                    <ThumbUpOffAltIcon/>
                                    63
                                </li>
                                <li className='comments-post'>
                                    <ChatBubbleOutlineIcon/>
                                    12 Comments
                                </li>
                            </ul>
                            <div className='read-more'>
                                <Link to=''>
                                    Read More
                                    <KeyboardDoubleArrowRightIcon/>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className='blog-sidebar'>
                    <div className='blog-widget'>
                        <div className='widget-title'>
                            <h2 className='title'>
                            Search Objects
                            </h2>
                        </div>
                        <form action="#" className='sidebar-search'>
                            <input type="text" placeholder='Search...'/>
                            <button>
                                <SearchIcon/>
                            </button>
                        </form>
                    </div>
                    <div className='blog-widget'>
                        <div className='widget-title'>
                            <h2 className='title'>
                            Categories
                            </h2>
                        </div>
                        <div className='sidebar-cat'>
                            <ul>
                                <li>
                                    <Link to=''>Movies</Link>
                                    <span>12</span>
                                </li>
                                <li>
                                    <Link to=''>Action Movies</Link>
                                    <span>10</span>
                                </li>
                                <li>
                                    <Link to=''>Streaming</Link>
                                    <span>9</span>
                                </li>
                                <li>
                                    <Link to=''>Download</Link>
                                    <span>16</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='blog-widget'>
                        <div className='widget-title'>
                            <h2 className='title'>
                            Recent Posts
                            </h2>
                        </div>
                        <div className='rc-post'>
                            <ul>
                                <li className='rc-post-item'>
                                    <div className='thumb'>
                                        <Link to=''>
                                            <img src="../../../public/image/blog_thumb01.jpg"/>
                                        </Link>
                                    </div>
                                    <div className='content'>
                                        <h5 className='title'>
                                        Express Management Effective
                                        </h5>
                                        <span className='date'>
                                        <AccessTimeIcon/>
                                        10 Mar 2021
                                        </span>
                                    </div>
                                </li>
                                <li className='rc-post-item'>
                                <div className='thumb'>
                                        <Link to=''>
                                            <img src="../../../public/image/blog_thumb01.jpg"/>
                                        </Link>
                                    </div>
                                    <div className='content'>
                                        <h5 className='title'>
                                        Express Management Effective
                                        </h5>
                                        <span className='date'>
                                        <AccessTimeIcon/>
                                        10 Mar 2021
                                        </span>
                                    </div>
                                </li>
                                <li className='rc-post-item'>
                                <div className='thumb'>
                                        <Link to=''>
                                            <img src="../../../public/image/blog_thumb01.jpg"/>
                                        </Link>
                                    </div>
                                    <div className='content'>
                                        <h5 className='title'>
                                        Express Management Effective
                                        </h5>
                                        <span className='date'>
                                        <AccessTimeIcon/>
                                        10 Mar 2021
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='blog-widget'>
                        <div className='widget-title'>
                            <h2 className='title'>
                            Tag Post
                            </h2>
                        </div>
                        <div className='tag-list'>
                            <ul>
                                <li>
                                    <Link to=''>Movies</Link>
                                </li>
                                <li>
                                    <Link to=''>Creative</Link>
                                </li>
                                <li>
                                    <Link to=''>News</Link>
                                </li>
                                <li>
                                    <Link to=''>Romantic</Link>
                                </li>
                                <li>
                                    <Link to=''>Who</Link>
                                </li>
                                <li>
                                    <Link to=''>English</Link>
                                </li>
                                <li>
                                    <Link to=''>Blending</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default BlogArea;
