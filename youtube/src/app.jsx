import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearcHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) // 주석 처리시 프리티어 자동 포맷 X
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearcHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
