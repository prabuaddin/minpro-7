'use client';

import React, { useEffect, useState } from 'react';
import SliderComponent from '@/components/cores/Slider';
import CardEvent from '@/components/cardevent';
import Link from 'next/link';
import axios from 'axios'

export default function Home() {

  const [events, setEvents] = useState(null)

  const onFetchEvents = async() => {
    try {
      const event = await axios.get('http://localhost:8000/event-organizer/events')
      setEvents(event.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onFetchEvents()
  }, [])


  return (
    <>
      <SliderComponent />
      <div className="p-10">
        <div className="flex flex-row justify-between">
          <h1 className="font-bold text-xl">Temukan Event Terdekat</h1>
          <Link href="">
            <h2 className="text-blue-400">Lihat Semua Event</h2>
          </Link>
        </div>
        <div className="lg:flex flex-row gap-8">
          <CardEvent />
          <CardEvent />
        </div>
        <h1 className="font-bold text-xl mt-5">Event Lampau</h1>
        <div className="lg:grid grid-cols-4 gap-4">
          {/* {events.map((event, index) => {
            return(
              <div key={index}>
                <Link to={`/detailevent/${event.id}`}>

                </Link>
              </div>
            )
          })} */}
        </div>
        <div className="bg-white shadow mt-16 rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold py-5">Cara Beli Tiket</h1>
            <p>Beli tiket mudah menggunakan GetTicket.Id</p>
          </div>
          <div className="lg:grid grid-cols-4 p-16 text-center">
            <div>
              <h1 className="font-bold text-lg">1. Daftarkan Akun</h1>
              <p>Daftarkan akun kamu unutk melakukan pembelian tiket</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">2. Pilih Event</h1>
              <p>Pilih event dan tipe tiket yang ingin dibeli</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">3. Lakukan Pembayaran</h1>
              <p>Pilih metode pembayaran yang sudah dipilih.</p>
            </div>
            <div>
              <h1 className="font-bold text-lg">4. Pembelian Selesai</h1>
              <p>Tiket berhasil dibeli dan segera tunggu E-Tiket terbit di akunmu</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
