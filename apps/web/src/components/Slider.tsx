'use client'

import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <div className="p-10 slider-container bg-blue-950 ">
      <Slider {...settings}>
        <div className='bg-blue-900'>
          <Image src={'https://mediad.publicbroadcasting.net/p/ketr/files/styles/x_large/public/201904/avengers_endgame_-_facebook.jpg'} width={1400} height={500} alt='Slide 1'></Image>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
    </>
  );
}
