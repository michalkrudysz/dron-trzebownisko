import classes from "./Film.module.scss";
import { useRef, useState } from "react";
import VideoModal from "./VideoModal";

export default function Film({ material, isReversed }) {
  const [currentVideo, setCurrentVideo] = useState(null);
  const videoModal = useRef();

  const openVideo = (videoSrc) => {
    setCurrentVideo(videoSrc);
    videoModal.current.openModal();
  };

  return (
    <>
      <VideoModal ref={videoModal} videoData={currentVideo} />
      <div
        className={`${classes["movies"]} ${isReversed ? classes.reversed : ""}`}
      >
        <div className={classes.left}>
          <div className={classes.description}>
            <div className={classes["title-box"]}>{material.titleBox}</div>
            <div className={classes["text-box"]}>{material.textBox}</div>
            <p className={classes.text}>{material.text}</p>
          </div>
        </div>
        <div className={classes.right}>
          <div
            onClick={() => openVideo(material.videoSrc)}
            className={classes["video-box"]}
          >
            <img src={material.src} alt={material.alt}></img>
          </div>
        </div>
      </div>
    </>
  );
}
