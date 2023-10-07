"use client";
import React from 'react'
import Row from '@/components/Row'
import Link from 'next/link';

const page = () => {

  return (
    <div className='leaderpage page'>

        <h1 className="toptitle">Statistics</h1>

        <div className="tables">

            <div id='firsttable' className="leaderboard">

                <h1 className="tabletitle">Last Game</h1>

                <div className="toprow">
                    <div className='topcolumn'><i className="fa-solid fa-sliders"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-clock"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-award"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-thumbs-up"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-thumbs-down"></i></div>
                </div>

                <Row data={JSON.parse(localStorage.getItem('current'))}/>

            </div>

            <div className="leaderboard">

                <h1 className="tabletitle">Best Game</h1>

                <div className="toprow">
                    <div className='topcolumn'><i className="fa-solid fa-sliders"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-clock"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-award"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-thumbs-up"></i></div>
                    <div className='topcolumn'><i className="fa-solid fa-thumbs-down"></i></div>
                </div>

                <Row data={JSON.parse(localStorage.getItem('best'))}/>

            </div>

        </div>

        <Link href="/" className="playbox">
            <i className='fa-solid fa-house'></i>
        </Link>
    
    </div>
  )
}

export default page