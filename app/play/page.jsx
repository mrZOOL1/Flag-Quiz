"use client"
import React from "react";
import Settings from "@/components/Settings";
import Link from 'next/link';

export default function Home() {

    const [FirstUrl, SetFirstUrl] = React.useState('13');
    const [SecondUrl, SetSecondUrl] = React.useState('25');
    const [ThirdUrl, SetThirdUrl] = React.useState('30');

    const submitHandler = function (firsturl, secondurl, thirdurl) {
        SetFirstUrl(firsturl);
        SetSecondUrl(secondurl);
        SetThirdUrl(thirdurl);
    };

    return (
        <div className="mainpage page">

            <h1 className="toptitle">Settings</h1>

            <Settings submitHandler={submitHandler} />

            <div className="playboxes">

                <Link href="/" className="playbox">
                    <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em" className="house">
                        <path d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2 1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40h56.5c1.4 0 2.8 0 4.2-.1 1.1.1 2.2.1 3.3.1h16c22.1 0 40-17.9 40-40v-16.2c.3-2.6.5-5.3.5-8.1l-.7-160.2h32z" />
                    </svg>
                </Link>

                <Link href={`/play/game/${FirstUrl}/${SecondUrl}/${ThirdUrl}`} className="playbox">
                    <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" className="play">
                        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z" />
                    </svg>
                </Link>

            </div>

        </div>
    )
}