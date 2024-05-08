'use client';
import React, { useState, useEffect } from 'react';
import styles from '../app/page.module.css'

const SearchInput = () => {

  const [notices, setNotices] = useState()
  const [search, setSearch] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    async function fetchData(){
      setLoading(true)
      const data = await fetch(`http://localhost:8000/eventorganizer/events`).then((res) => res.json())
      setNotices(data._embedded.notices)

      setLoading(false)
    }
    fetchData()
  }, [search])

  return (
    <>
      <div className={styles.container}>
        <div className={styles.search}>
          <input type="search" placeholder='search' onChange={(e) => setSearch(e.target.value)} />

          {JSON.stringify(notices)}
        </div>
      </div>
    </>
  );
};

export default SearchInput