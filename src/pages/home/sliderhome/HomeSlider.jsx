import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './HomeSlider.scss';
// Import Swiper styles
import 'swiper/css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
const HomeSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide className='swiper-slider'>
                    <div className='background-slider'></div>
                    <div className='color-bottom-background'></div>
                    <div className='color-background'></div>
                    <div className='info-background'>
                        <div className='box-info'>
                            <div className='info'>
                                <h1>Ruby Gillman, Teenage Kraken</h1>
                                <p>
                                Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.
                                </p>
                                <div className='button-slider'>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Now</Link>
                                </button>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Traller</Link>
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slider'>
                    <div className='background-slider'></div>
                    <div className='color-bottom-background'></div>
                    <div className='color-background'></div>
                    <div className='info-background'>
                        <div className='box-info'>
                            <div className='info'>
                                <h1>Ruby Gillman, Teenage Kraken</h1>
                                <p>
                                Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.
                                </p>
                                <div className='button-slider'>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Now</Link>
                                </button>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Traller</Link>
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slider'>
                    <div className='background-slider'></div>
                    <div className='color-bottom-background'></div>
                    <div className='color-background'></div>
                    <div className='info-background'>
                        <div className='box-info'>
                            <div className='info'>
                                <h1>Ruby Gillman, Teenage Kraken</h1>
                                <p>
                                Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.
                                </p>
                                <div className='button-slider'>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Now</Link>
                                </button>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Traller</Link>
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swiper-slider'>
                    <div className='background-slider'></div>
                    <div className='color-bottom-background'></div>
                    <div className='color-background'></div>
                    <div className='info-background'>
                        <div className='box-info'>
                            <div className='info'>
                                <h1>Ruby Gillman, Teenage Kraken</h1>
                                <p>
                                Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.
                                </p>
                                <div className='button-slider'>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Now</Link>
                                </button>
                                <button>
                                    <Link to=''><PlayArrowIcon/>Watch Traller</Link>
                                </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                

            </Swiper>

        </div>
    );
}

export default HomeSlider;
