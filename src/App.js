import './App.css';
import VideoCard from './VideoCard';
import { useState, useEffect } from 'react';
import db from './firebase';

function App(props) {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot((snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    // BEM CONVENTION
    <div className="app">
      <div className="app_top">
        <img
          className="app_logo"
          src="../assets/image/instagram.png"
          alt="logo"
        />

        <h1>Reels</h1>
      </div>

      <div className="app_videos">
        {/* container of app_vidoes, scrollable */}
        {reels.map(({ channel, song, avatarSrc, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
