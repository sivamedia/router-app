import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const refVideo = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      refVideo.current.play();
    } else {
      refVideo.current.pause();
    }
  },[isPlaying]);

  return <video ref={refVideo} src={src} loop playsInline />;
}

export default function VideoPlayerApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}
