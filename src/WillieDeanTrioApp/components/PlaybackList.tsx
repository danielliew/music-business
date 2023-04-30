import { useState } from "react";
import styles from "./PlaybackList.module.css";

interface PlaybackItemProps {
  id: string;
  title: string;
  year: string;
  description: string;
  totalDuration: string;
  url: string;
  coverArtUrl: string;
  isPlaying?: boolean;
  onPlayback?: (id: string) => void;
}

function PlaybackItem({
  id,
  title,
  year,
  description,
  totalDuration,
  url,
  coverArtUrl,
  isPlaying,
  onPlayback,
}: PlaybackItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.itemCoverArt}>
        <a href={url} target="_blank" rel="noopener noreferrer" className={styles.itemCoverArtAnchor}>
          <img
            className={styles.itemCoverArtImage}
            src={coverArtUrl}
            alt="cover art"
          />
        </a>
      </div>
      <div className={styles.itemDetailsContainer}>
        <span className={styles.itemDetail_Year}>{year}</span>
        <h1 className={styles.itemDetail_Title}>{title}</h1>
        <span className={styles.itemDetail_Description}>{description}</span>
      </div>
      <div className={styles.itemPlaybackControls}>
        <span
          className={styles.itemPlaybackControls_playButton}
          onClick={() => {
            if (onPlayback) {
              onPlayback(id);
            }
          }}
        >
          {isPlaying ? (
            <div className={styles.itemPlaybackPauseIcon}>
              <span />
              <span />
            </div>
          ) : (
            <div className={styles.itemPlaybackPlayIcon}>
              <span />
            </div>
          )}
        </span>
        <span className={styles.itemPlaybackControls_totalDuration}>
          {totalDuration}
        </span>
      </div>
    </div>
  );
}

interface PlaybackListProps {
  title: string;
  playbackItems: PlaybackItemProps[];
}

function PlaybackList({ playbackItems, title }: PlaybackListProps) {
  const [playing, setPlaying] = useState("");

  const onPlayback = (id: string) => {
    setPlaying((playing) => {
      if (playing === id) {
        return "";
      }
      return id;
    });
  };

  return (
    <div className={styles.playbackList}>
      <div className={styles.playbackListTitle}>{title}</div>
      <div className={styles.container}>
        {playbackItems.map((playbackItem) => (
          <PlaybackItem
            key={playbackItem.id}
            id={playbackItem.id}
            title={playbackItem.title}
            year={playbackItem.year}
            description={playbackItem.description}
            totalDuration={playbackItem.totalDuration}
            url={playbackItem.url}
            coverArtUrl={playbackItem.coverArtUrl}
            isPlaying={playing === playbackItem.id}
            onPlayback={onPlayback}
          />
        ))}
      </div>
    </div>
  );
}

export default PlaybackList;
