"use client"
import React from "react";
import Settings from "@/components/Settings";
import Link from 'next/link';
 
export default function Home() {

    const [FirstUrl, SetFirstUrl] = React.useState('13');
    const [SecondUrl, SetSecondUrl] = React.useState('25');
    const [ThirdUrl, SetThirdUrl] = React.useState('30');

    const submitHandler = function(firsturl,secondurl,thirdurl) {
        SetFirstUrl(firsturl);
        SetSecondUrl(secondurl);
        SetThirdUrl(thirdurl);
    };

return (
    <div className="mainpage page">

        <h1 className="toptitle">Settings</h1>
        
        <Settings submitHandler={submitHandler}/>

        <div className="playboxes">

            <Link href="/" className="playbox">
                <i className='fa-solid fa-house'></i>
            </Link>

            <Link href={`/play/game/${FirstUrl}/${SecondUrl}/${ThirdUrl}`} className="playbox">
                <i className='fa-solid fa-play'></i>
            </Link>
            
        </div>

    </div>
)
}