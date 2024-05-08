'use client'

import React from 'react';
import SliderComponent from '@/components/Slider';
import CardEvent from '@/components/cardevent';

export default function Home() {

  return (
    <>
    <SliderComponent/>
    <div className='p-10'>
      <div>
        <CardEvent/>
      </div>
    </div>
    </>
  );
}
