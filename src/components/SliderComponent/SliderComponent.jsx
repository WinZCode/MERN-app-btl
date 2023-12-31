import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';

const SliderComponent = ({ arrImages }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoSpeed: 2000,
    };
    return (
        <Slider {...settings}>
            {arrImages.map((img) => {
                return (
                    <Image
                        key={img}
                        src={img}
                        alt="slider"
                        preview={false}
                        width="100%"
                    />
                );
            })}
        </Slider>
    );
};

export default SliderComponent;
