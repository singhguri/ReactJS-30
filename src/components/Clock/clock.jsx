import { useEffect, useState } from "react";
import "./clock.scss";

const Clock = () => {
  const [DarkTheme, setDarkTheme] = useState(false);

  const [TextClock, setTextClock] = useState({
    textHour: 0,
    textMinutes: 0,
    textAmPm: "",
    dateDay: 0,
    dateMonth: "",
    dateYear: "",
  });

  useEffect(() => {
    const intervalID = setInterval(() => {
      clockText();
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  /*==================== CLOCK ====================*/
  const hour = document.querySelector("#clock-hour"),
    minutes = document.querySelector("#clock-minutes"),
    seconds = document.querySelector("#clock-seconds");

  const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
      mm = date.getMinutes() * 6,
      ss = date.getSeconds() * 6;

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutes.style.transform = `rotateZ(${mm}deg)`;
    seconds.style.transform = `rotateZ(${ss}deg)`;
  };
  setInterval(clock, 1000); // 1000 = 1s

  /*==================== CLOCK & DATE TEXT ====================*/

  const clockText = () => {
    let date = new Date();

    let hh = date.getHours(),
      ampm = "",
      mm = date.getMinutes(),
      day = date.getDate(),
      // dayweek = date.getDay(),
      month = date.getMonth(),
      year = date.getFullYear();

    // We change the hours from 24 to 12 hours and establish whether it is AM or PM

    if (hh >= 12) {
      hh = hh - 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    // We detect when it's 0 AM and transform to 12 AM
    if (hh === 0) {
      hh = 12;
    }

    // Show a zero before hours
    if (hh < 10) {
      hh = 0 + hh;
    }

    // Show time
    let textHour = hh + ":";

    // Show a zero before the minutes
    if (mm < 10) {
      mm = "0" + mm;
    }

    // Show minutes
    let textMinutes = mm;

    // Show am or pm
    let textAmPm = ampm;

    // If you want to show the name of the day of the week
    // let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

    // We get the months of the year and show it
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // We show the day, the month and the year
    let dateDay = day + " ";
    let dateMonth = months[month] + ",";
    let dateYear = year;

    textAmPm === "AM" ? setDarkTheme(false) : setDarkTheme(true);

    setTextClock({
      textHour,
      textMinutes,
      textAmPm,
      dateDay,
      dateMonth,
      dateYear,
    });
  };

  // const toggleTheme = () => {
  //   setDarkTheme(!DarkTheme);
  // };

  return (
    <div className={`main ${DarkTheme ? "dark-theme" : ""}`}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      />
      <section className={`clock container`}>
        <div className="clock__container grid">
          <div className="clock__content grid">
            <div className="clock__circle">
              <span className="clock__twelve"></span>
              <span className="clock__three"></span>
              <span className="clock__six"></span>
              <span className="clock__nine"></span>

              <div className="clock__rounder"></div>
              <div className="clock__hour" id="clock-hour"></div>
              <div className="clock__minutes" id="clock-minutes"></div>
              <div className="clock__seconds" id="clock-seconds"></div>

              {/* Dark/light button */}
              {/* <div className="clock__theme" onClick={toggleTheme}>
                <i
                  className={`bx bxs-${DarkTheme ? "sun" : "moon"}`}
                  id="theme-button"
                ></i>
              </div> */}
            </div>

            <div>
              <div className="clock__text">
                <div className="clock__text-hour" id="text-hour">
                  {TextClock.textHour}
                </div>
                <div className="clock__text-minutes" id="text-minutes">
                  {TextClock.textMinutes}
                </div>
                <div className="clock__text-ampm" id="text-ampm">
                  {TextClock.textAmPm}
                </div>
              </div>

              <div className="clock__date">
                <span id="date-day">{TextClock.dateDay}</span>
                <span id="date-month">{TextClock.dateMonth}</span>
                <span id="date-year">{TextClock.dateYear}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clock;
