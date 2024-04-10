import { createPortal } from "react-dom";
import {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import classes from "./VideoModal.module.scss";
import buttonClose from "../assets/close-reference.png";
import buttonPlay from "../assets/play.png";
import rightArrowPlayer from "../assets/right-arrow-player.png";
import leftArrowPlayer from "../assets/left-arrow-player.png";
import pause from "../assets/pause.png";

const VideoModal = forwardRef(({ videoData }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  function formatTime(seconds) {
    const result = new Date(seconds * 1000).toISOString().substr(11, 8);
    return result.startsWith("00:") ? result.substr(3) : result;
  }

  function closeModal(event) {
    event.stopPropagation();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function togglePlayPause() {
    const isVideoPaused = videoRef.current.paused;
    if (isVideoPaused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  function playPauseVideo() {
    togglePlayPause();
  }

  function rewind10Seconds() {
    videoRef.current.currentTime -= 10;
  }

  function forward10Seconds() {
    videoRef.current.currentTime += 10;
  }

  function handleProgressBarClick(event) {
    const bounds = progressBarRef.current.getBoundingClientRect();
    const clickPosition = event.clientX - bounds.left;
    const width = bounds.width;
    const clickRatio = clickPosition / width;
    const newTime = clickRatio * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && isOpen) {
        const currentProgress =
          (videoRef.current.currentTime / videoRef.current.duration) * 100;
        setProgress(currentProgress);
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen]);

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  useEffect(() => {
    function handleKeydown(event) {
      if (event.code === "Space") {
        event.preventDefault();
        togglePlayPause();
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
      <div
        className={classes["progress-container"]}
        onClick={handleProgressBarClick}
        ref={progressBarRef}
      >
        <div className={classes["current-time"]}>{formatTime(currentTime)}</div>
        <div
          className={classes["progress-bar"]}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <img
        className={classes["button-close"]}
        onClick={closeModal}
        src={buttonClose}
        alt="close"
      />
      <div className={classes.controls}>
        <button onClick={rewind10Seconds}>
          <img src={leftArrowPlayer} alt="backward" />
        </button>
        <button onClick={playPauseVideo}>
          {isPlaying ? (
            <img src={pause} alt="pause" />
          ) : (
            <img src={buttonPlay} alt="play" />
          )}
        </button>
        <button onClick={forward10Seconds}>
          <img src={rightArrowPlayer} alt="forward" />
        </button>
      </div>
      <div className={classes.modal} onClick={togglePlayPause}>
        <div className={classes["modal-content"]}>
          <video
            ref={videoRef}
            className={classes.video}
            controls={false}
            autoPlay
          >
            <source
              onClick={(e) => e.stopPropagation()}
              src={videoData}
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className={classes.shadow}></div>
    </>,
    document.getElementById("video-modal")
  );
});

VideoModal.displayName = "VideoModal";
export default VideoModal;
