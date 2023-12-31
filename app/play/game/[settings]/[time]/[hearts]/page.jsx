"use client"
import React from "react";
import { nanoid } from "nanoid";
import Answer from "@/components/Answer";
import Stats from "@/components/Stats";
import Link from 'next/link';

export default function Home(props) {

  const checkdifferent = function (arr) {
    let alldifferent = true;
    for (let i = 0; i < arr.length - 1; i++) {
      let k = i + 1;
      for (k; k < arr.length; k++) {
        if (arr[i] === arr[k]) {
          alldifferent = false;
        }
      }
    }
    return alldifferent;
  }

  function sec2time(timeInSeconds) {
    let pad = function (num, size) { return ('000' + num).slice(size * -1); },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60)
    return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
  }

  const url = props.params;
  const mode = Math.floor(parseInt(url.settings) / 10);
  const AnswersNum = mode === 4 ? Math.floor(parseInt(url.settings)) % 10 : mode + 2;
  const time = parseInt(url.time);
  const hearts = parseInt(mode === 3 ? 1 : url.hearts);

  const json = require('/countries.json');
  const postjson = JSON.parse(JSON.stringify(json));
  const jsonNamesArray = Object.keys(postjson);
  const jsonValuesArray = Object.values(postjson);
  const countriesArray = [];
  for (let i = 0; i < 245; i++) {
    countriesArray[i] = { short: jsonNamesArray[i], full: jsonValuesArray[i] };
  }

  const [ShownCountries, SetShownCountries] = React.useState([]);
  const [ShortCorrect, SetShortCorrect] = React.useState('');
  const [LongCorrect, SetLongCorrect] = React.useState('');
  const [Score, SetScore] = React.useState(3600);
  const ScoreRef = React.useRef(3600);
  const TimeStart = React.useRef();
  const TimeStamp = React.useRef('00:00:00');
  const Hearts = React.useRef(hearts);
  const [IsFinished, SetIsFinished] = React.useState(false);

  const Left = React.useRef(countriesArray);
  const [ModeName, SetModeName] = React.useState('');

  React.useEffect(() => {

    let delay;
    switch (mode) {
      case 1:
        delay = 3600000;
        SetModeName('Chill');
        break;
      case 2:
        delay = 1500000;
        SetModeName('Expert');
        break;
      case 3:
        delay = 600000;
        SetModeName('Psycho');
        break;
      case 4:
        delay = time * 60000;
        SetModeName('Custom');
        break;
    }


    const timestart = new Date();
    TimeStart.current = timestart;
    setTimeout(() => {
      const timeend1 = new Date();
      const seconds1 = (timeend1.getTime() - timestart.getTime()) / 1000;
      TimeStamp.current = sec2time(seconds1);
      SetIsFinished(true);
    }, delay);
  }, []);

  React.useEffect(() => {

    const randomNumberGenerator = function (param) {
      return Math.floor(Math.random() * param);
    };

    const randomNumbers = [];
    for (let i = 0; i < AnswersNum; i++) {
      randomNumbers.push(randomNumberGenerator(245));
    }


    let right;
    for (let i = 0; i < randomNumbers.length - 1; i++) {
      let k = i + 1;
      for (k; k < randomNumbers.length; k++) {
        if (randomNumbers[i] === randomNumbers[k]) {
          randomNumbers[k] = randomNumberGenerator(245);
        }
      }
    }
    const num = Math.floor(Math.random() * AnswersNum);
    randomNumbers[num] = randomNumberGenerator(Left.current.length);
    randomNumbers[num] = jsonValuesArray.indexOf(Left.current[randomNumbers[num]].full);
    right = randomNumbers[num];



    while (checkdifferent(randomNumbers) === false) {
      for (let i = 0; i < randomNumbers.length - 1; i++) {
        let k = i + 1;
        for (k; k < randomNumbers.length; k++) {
          if (randomNumbers[i] === randomNumbers[k]) {
            randomNumbers[k] = randomNumberGenerator(245);
          }
        }
      }
      const newnum = Math.floor(Math.random() * AnswersNum);
      randomNumbers[newnum] = randomNumberGenerator(Left.current.length);
      randomNumbers[newnum] = jsonValuesArray.indexOf(Left.current[randomNumbers[newnum]].full);
      right = randomNumbers[newnum];
    }

    SetShortCorrect(jsonNamesArray[right]);
    SetLongCorrect(jsonValuesArray[right]);

    const countries = [];
    for (const item of randomNumbers) {
      countries.push(jsonValuesArray[item]);
    }

    SetShownCountries(countries);

  }, []);

  const pickAnswer = function (name) {

    const timeend2 = new Date();
    const seconds2 = (timeend2.getTime() - TimeStart.current.getTime()) / 1000;
    TimeStamp.current = sec2time(seconds2);

    if (name == LongCorrect) {
      SetScore(old => old + 100);
      ScoreRef.current = ScoreRef.current + 100;
      Left.current = Left.current.filter(item => item.full != name);
      document.querySelector('.scorestat').className = 'scorestat';
      document.querySelector('.scorestat').classList.toggle('correctanimation');
      document.querySelector('.scorestat').addEventListener('animationend', function () {
        document.querySelector('.scorestat').className = 'scorestat';
      });
    } else {
      SetScore(old => old - 100);
      ScoreRef.current = ScoreRef.current - 100;
      Hearts.current = Hearts.current - 1;
      document.querySelector('.scorestat').className = 'scorestat';
      document.querySelector('.scorestat').classList.toggle('wronganimation');
      document.querySelector('.scorestat').addEventListener('animationend', function () {
        document.querySelector('.scorestat').className = 'scorestat';
      });
    }

    if (Hearts.current === 0 && mode != 1) {
      SetIsFinished(true);
    }

    if (Left.current.length === 0) {
      SetIsFinished(true);
    } else {
      const randomNumberGenerator = function (param) {
        return Math.floor(Math.random() * param);
      };

      const randomNumbers = [];
      for (let i = 0; i < AnswersNum; i++) {
        randomNumbers.push(randomNumberGenerator(245));
      }


      let right;
      for (let i = 0; i < randomNumbers.length - 1; i++) {
        let k = i + 1;
        for (k; k < randomNumbers.length; k++) {
          if (randomNumbers[i] === randomNumbers[k]) {
            randomNumbers[k] = randomNumberGenerator(245);
          }
        }
      }
      const num = Math.floor(Math.random() * AnswersNum);
      randomNumbers[num] = randomNumberGenerator(Left.current.length);
      randomNumbers[num] = jsonValuesArray.indexOf(Left.current[randomNumbers[num]].full);
      right = randomNumbers[num];



      while (checkdifferent(randomNumbers) === false) {
        for (let i = 0; i < randomNumbers.length - 1; i++) {
          let k = i + 1;
          for (k; k < randomNumbers.length; k++) {
            if (randomNumbers[i] === randomNumbers[k]) {
              randomNumbers[k] = randomNumberGenerator(245);
            }
          }
        }
        const newnum = Math.floor(Math.random() * AnswersNum);
        randomNumbers[newnum] = randomNumberGenerator(Left.current.length);
        randomNumbers[newnum] = jsonValuesArray.indexOf(Left.current[randomNumbers[newnum]].full);
        right = randomNumbers[newnum];
      }

      SetShortCorrect(jsonNamesArray[right]);
      SetLongCorrect(jsonValuesArray[right]);

      const countries = [];
      for (const item of randomNumbers) {
        countries.push(jsonValuesArray[item]);
      }

      SetShownCountries(countries);
    }
  }




  React.useEffect(() => {

    const timeend3 = new Date();
    const seconds3 = (timeend3.getTime() - TimeStart.current.getTime()) / 1000;
    SetScore(old => old - parseInt(seconds3));
    ScoreRef.current = ScoreRef.current - parseInt(seconds3);

  }, [IsFinished]);

  const exit = function () {
    if (!IsFinished) {
      SetIsFinished(true);
    }
  }




  return (
    <main className="mainpage page">

      <h1 className="scorestat" style={{ display: IsFinished && 'none' }}>{`${245 - Left.current.length}/245`}</h1>

      <Stats display={!IsFinished && 'none'} time={TimeStamp.current} mistakes={hearts - Hearts.current} countries={245 - Left.current.length} score={Score} />

      <img style={{ display: IsFinished && 'none' }} className='flag' src={`https://flagcdn.com/${ShortCorrect}.svg`} alt={`${ShortCorrect}`} />

      <div className="buttons">

        <div style={{ display: IsFinished && 'none' }} className="answers">
          {ShownCountries.map(country => <Answer name={country} clickHandler={pickAnswer} key={nanoid()} />)}
        </div>

        <Link href="/" className="playbox" onClick={exit}>
          <svg viewBox="0 0 576 512" fill="currentColor" height="1em" width="1em" className="house">
            <path d="M543.8 287.6c17 0 32-14 32-32.1 1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24 0 18 14 32.1 32 32.1h32v69.7c-.1.9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2 1.5.1 3 .2 4.5.2h56c22.1 0 40-17.9 40-40v-88c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v88c0 22.1 17.9 40 40 40h56.5c1.4 0 2.8 0 4.2-.1 1.1.1 2.2.1 3.3.1h16c22.1 0 40-17.9 40-40v-16.2c.3-2.6.5-5.3.5-8.1l-.7-160.2h32z" />
          </svg>
        </Link>

      </div>

    </main>
  )
}