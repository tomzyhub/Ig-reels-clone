import React, { useRef, useState } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ url, channel, likes, shares, avatarSrc, song }) {
  // useState = react variable
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  // useRef = react pointer
  const videoRef = useRef(null);

  const onVideopress = () => {
    if (isVideoPlaying) {
      //stop playing
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        className="videoCard_player"
        ref={videoRef}
        onClick={onVideopress}
        src={url}
        alt="ig reels"
        loop
      />
      <VideoFooter
        channel={channel}
        url={url}
        song={song}
        avatarSrc={avatarSrc}
        shares={shares}
        likes={likes}
      />
    </div>
  );
}

export default VideoCard;
