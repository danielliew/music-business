import { Link } from "react-router-dom";
import styles from "./LiveShowsList.module.css";

interface LiveShowProps {
  id: string;
  date: string;
  venue: string;
  location: string;
  ticketUrl: string;
  extraInfo?: string;
}

const LiveShow = ({ date, venue, location, ticketUrl,extraInfo }: LiveShowProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item_col1}>
        <div className={styles.item_date}>{date}</div>
        <div className={styles.item_venue}>{venue}</div>
        <div className={styles.item_extraInfo}>{extraInfo}</div>
      </div>
      <div className={styles.item_col2}>
        <div className={styles.item_location}>{location}</div>
      </div>
      <div className={styles.item_col3}>
        <Link
          to={ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.item_ticketBtnAnchor}
        >
          <div className={styles.item_ticketBtn}>Tickets</div>
        </Link>
      </div>
    </div>
  );
};

interface LiveShowsListProps {
  title: string;
  liveShows: LiveShowProps[];
}

const LiveShowsList = ({ title, liveShows }: LiveShowsListProps) => {
  return (
    <div className={styles.liveShowsList}>
      <div className={styles.liveShowsList_Title}>{title}</div>
      {liveShows.map((liveShow) => {
        return (
          <LiveShow
            key={liveShow.id}
            id={liveShow.id}
            date={liveShow.date}
            venue={liveShow.venue}
            location={liveShow.location}
            ticketUrl={liveShow.ticketUrl}
            extraInfo={liveShow.extraInfo}
          />
        );
      })}
    </div>
  );
};

export default LiveShowsList;
