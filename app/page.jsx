"use client";
import React from 'react'
import Link from 'next/link';

const page = () => {

  return (
    <div className='page'>

      <h1 className='toptitle'>Ilan's Flag Game</h1>

      <div className="menu">

        <Link className="space" href='/play'>Play</Link>
        <Link className="space" href='/statistics'>Statistics</Link>

      </div>

    </div>
  )
}

export default page