import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
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
                            <button></button>
                        </form>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  );
}

export default BlogArea;
