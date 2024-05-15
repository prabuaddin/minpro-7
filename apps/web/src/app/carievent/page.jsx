'use client';
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { IoFilter } from "react-icons/io5";

export default function CariEvent() {
  const [search, setSearch] = useState('');

  const event = async () => {
    try {
      await axios.get('http://localhost:8000/event-organizer/events');
    } catch (error) {
      console.log(error);
    }
  };

  let listEvent = event;

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderEventList = () => {
    return listEvent.map((events, i) => <p key={i}>{events}</p>);
  };

  if (search !== '') {
    listEvent = event.filter((events) => {
      return events.includes(search);
    });
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  });

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <div className="p-7">
        <div className='flex justify-between'>
          <input
            type="text"
            id="searchInput"
            className="border border-gray-300 rounded-md py-2 px-4 w-80 focus:outline-none focus:border-blue-500"
            placeholder="Cari..."
          />
          <button className="btn bg-white border border-black"><IoFilter/> Filter</button>
        </div>

      </div>
    </>
  );
}
