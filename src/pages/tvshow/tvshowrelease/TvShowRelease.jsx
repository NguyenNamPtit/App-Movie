import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
/*import scss*/
import '../tvshowrelease/TvShowRelease.scss';
import '../../home/upcommingmovie/UpcommingMovie.scss';
const TvShowRelease = () => {
  return (
    <div className='main-movie'>
            <Container className='custom-main-movie'>
                <Row>
                    <Col xs={6}>
                        <div className='title-section'>
                            <h1>New Release TvShow</h1>
                        </div>
                    </Col>
                </Row>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    className='swiper-slide'
                >
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to=''>
                            <div className='movie-item'>
                                <div className='background-color-movie'></div>
                                <button className='btn-movie-item'>
                                    <span><PlayArrowIcon /></span>

                                </button>
                                <div className='info-movie-item'>
                                    <div className='box-info-item'>
                                        <div></div>                                       
                                        <p>2023</p>
                                        <p>Elemental</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                    

                </Swiper>
                
            </Container>
        </div>
  );
}

export default TvShowRelease;
