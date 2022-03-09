import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearcHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=25&q=${query}&type=video&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setVideos(result.items);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <SearcHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
