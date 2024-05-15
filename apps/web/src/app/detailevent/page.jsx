'use client'
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DetailEvent() {

  const params = useParams()
  const [events, setEvents] = useState(null)  

  const onFetchEvent = async() => {
    try {
      const res = await axios.get(`http://localhost:8000/event-organizer/events/${params?.id}`)
      setEvents(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onFetchEvent
  })

  return (
    <>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="event image"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src=""
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-xl mb-1 font-bold">Event Name</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptatum, autem rerum voluptatem delectus voluptates reiciendis recusandae possimus dolor, et laboriosam perspiciatis id, deserunt saepe sint? Placeat ab consequatur reiciendis?</p>
              <div className="flex-row py-3 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <span className="title-font font-bold text-2xl text-gray-900"></span>
                <h3 className="mt-5">
                  <a href="" className="underline ml-2">
                  </a>
                </h3>
                <div className="dropdown w-[100px]">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn rounded-sm border border-black w-full bg-yellow-200"
                  >Ticket</div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] p-2 w-full shadow bg-base-100 rounded-sm"
                  >
                    <li>Festival</li>
                    <li>VIP</li>
                    <li>VVIP</li>
                  </ul>
                </div>

                <button className="btn bg-black text-white w-full rounded-none mt-2">
                  Buy Now
                </button>
                <div className="dropdown w-full">
                  <button className="btn rounded-sm border border-black mt-1 w-full">
                    Add To Cart
                  </button>
                  <div
                    tabIndex={0}
                    className="flex flex-col gap-3 dropdown-content z-[1] p-2 shadow bg-base-100 rounded-sm"
                  >
                    <div className="flex items-center gap-10 ">
                      <button className="btn border-black">-</button>
                      
                      <button className="btn border-black">+</button>
                    </div>
                    <button className="btn bg-black text-white w-full rounded-none">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
