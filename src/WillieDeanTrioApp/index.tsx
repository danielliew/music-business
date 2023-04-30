import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { BsFillHandbagFill } from "react-icons/bs";

import styles from "./WillieDeanTrioApp.module.css";
import PlaybackList from "./components/PlaybackList";

import willieDeanTrio from "../assets/willieDeanTrio.svg";
import playbackCover1 from "../assets/playbackCovers/cover1.jpeg";
import playbackCover2 from "../assets/playbackCovers/cover2.jpeg";
import playbackCover3 from "../assets/playbackCovers/cover3.jpeg";
import { useState } from "react";
import LiveShowsList from "./components/LiveShowsList";
import NewsLetterSignUp from "./components/NewsLetterSignUp";

const instagramUrl = "https://www.instagram.com/williedeantrio/";

function WillieDeanTrioApp() {
  const [readmore, setReadmore] = useState(false);

  const toggleReadmore = () => {
    setReadmore(!readmore);
  };

  return (
    <div className={styles.app}>
      <section className={styles.topPane}>
        <div className={styles.mainLogoContainer}>
          <div>
            <a
              className={styles.socialLogo}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className={styles.fbLogo} />
            </a>
            <a
              className={styles.socialLogo}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className={styles.igLogo} />
            </a>
            <a
              className={styles.socialLogo}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className={styles.ytLogo} />
            </a>
            <a
              className={styles.socialLogo}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoTiktok className={styles.tkLogo} />
            </a>
            <a
              className={styles.socialLogo}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillHandbagFill className={styles.merchLogo} />
            </a>
          </div>
          <img
            src={willieDeanTrio}
            className={styles.mainLogo}
            alt="Vite logo"
          />
        </div>
        <div className={styles.mainCoverContainer}>
          <img
            src={playbackCover1}
            className={styles.mainCover}
            alt="Vite logo"
          />
        </div>
      </section>

      <section className={styles.layoutContainer}>
        <PlaybackList
          title="Listen Now"
          playbackItems={[
            {
              id: "1",
              title: "On the One",
              year: "2019",
              description: "The Willie Dean Trio's debut album",
              totalDuration: "3:21",
              url: "https://open.spotify.com/album/5Z3Z1ZQ4ZQZQZQZQZQZQZQ",
              coverArtUrl: playbackCover1,
            },
            {
              id: "2",
              title: "Somebody",
              year: "2019",
              description: "The Willie Dean Trio's debut album",
              totalDuration: "3:21",
              url: "https://open.spotify.com/album/5Z3Z1ZQ4ZQZQZQZQZQZQZQ",
              coverArtUrl: playbackCover2,
            },
            {
              id: "3",
              title: "Take Me Higher",
              year: "2019",
              description: "The Willie Dean Trio's debut album",
              totalDuration: "3:21",
              url: "https://open.spotify.com/album/5Z3Z1ZQ4ZQZQZQZQZQZQZQ",
              coverArtUrl: playbackCover3,
            },
          ]}
        />
      </section>

      <section className={styles.layoutContainer}>
        <div className={styles.layout}>
          <h1>
            "Pure, raw, outstanding musicianship"
            <small>- Orlando Sentinel</small>
          </h1>

          <p>
            Willie Dean is an accomplished musician, singer, and songwriter
            based in Orlando, Florida. Born and raised in the Sunshine State,
            Willie developed a love for music at an early age and started
            playing guitar when he was just 12 years old. He spent countless
            hours practicing and perfecting his craft, and eventually went on to
            study guitar performance at Rollins College, where he earned his
            Bachelor's degree.
            <br />
            <br />
            After graduation, Willie decided to stay in central Florida to
            continue honing his skills and pursuing his passion for music. He
            formed the Willie Dean Trio, a dynamic band that includes bassist
            William Palladino and drummer Bill Jordan. Together, they create a
            sound that is both unique and powerful, blending elements of blues,
            rock, and funk into a cohesive and compelling style.
            <br />
            <br />
            {readmore ? (
              <span>
                Willie's music is heavily influenced by some of the great
                guitarists of our time, including John Mayer, Stevie Ray
                Vaughan, and Cory Wong. He also draws inspiration from the
                soulful sounds of Vulfpeck and the funky grooves of the Meters.
                His songs are characterized by his exceptional guitar work,
                soulful vocals, and heartfelt lyrics.
                <br />
                <br />
                In late 2022, Willie released his debut EP, a six-track
                collection that showcases his talents as both a guitarist and a
                songwriter. The EP features high-energy tracks like "On the One"
                and "Take Me Higher," as well as more introspective and
                emotional songs like "Somebody" and "Without You." The EP has
                been praised for its raw, unfiltered sound and outstanding
                musicianship, earning critical acclaim from outlets like the
                Orlando Sentinel and others.
                <br />
                <br />
                Through his music and his dedication to his craft, Willie Dean
                has established himself as one of the most talented and exciting
                indie artists on the scene today. With his powerful guitar
                playing, soulful vocals, and heartfelt lyrics, he continues to
                inspire and entertain audiences around Central Florida.
                <br />
                <br />
                <span onClick={toggleReadmore} className={styles.toggleBtn}>
                  Show less
                </span>
              </span>
            ) : (
              <span onClick={toggleReadmore} className={styles.toggleBtn}>
                Read more
              </span>
            )}
          </p>
        </div>
      </section>

      <section>
        <LiveShowsList
          title="Live Shows"
          liveShows={[
            {
              id: "1",
              date: "Sep 27, 2023",
              venue: "Fiddler's Green",
              location: "Orlando, FL",
              ticketUrl: "https://www.ticketmaster.com/",
              extraInfo: "With special guest The Groove Orient",
            },
            {
              id: "1",
              date: "Sep 29, 2023",
              venue: "Will's Pub",
              location: "Orlando, FL",
              ticketUrl: "https://www.ticketmaster.com/",
              extraInfo: "18+ after 02:00 AM",
            },
            {
              id: "1",
              date: "Oct 5, 2023",
              venue: "House of Blues",
              location: "Orlando, FL",
              ticketUrl: "https://www.ticketmaster.com/",
            },
          ]}
        />
      </section>

      <section className={styles.layoutContainer}>
        <div className={styles.layout}>
          <NewsLetterSignUp />
        </div>
      </section>

      <section className={styles.layoutContainer}>
        <div className={styles.layout}>
          <h1>What's next?</h1>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsNextItem}
            >
              <span>🎧 Listen to more of Willie Dean Trio's music!</span>
            </a>
          </div>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsNextItem}
            >
              <span>🎸 Watch some of the trio's live sets</span>
            </a>
          </div>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsNextItem}
            >
              <span>🎩 Leave a tip!</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.layoutContainer}>
        <div className={styles.layout}>
          © 2023 Willie Dean. All Rights Reserved. | Built by dliew
        </div>
      </section>
    </div>
  );
}

export default WillieDeanTrioApp;
