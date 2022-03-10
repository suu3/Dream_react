import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe
      className={styles.detail}
      id="ytplayer"
      type="text/html"
      width="100%"
      height="500px"
      src="https://www.youtube.com/embed/M7lc1UVf-VE"
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
    <pre className={styles.description}>{snippet.description}</pre>
  </section>
);

export default VideoDetail;
