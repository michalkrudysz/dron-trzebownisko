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
  const [isPlaying, setIsPlaying] = useState(true);

  console.log(videoData);
  function closeModal(event) {
    event.stopPropagation();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }

  function playPauseVideo() {
    setIsPlaying((prev) => !prev);
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function rewind10Seconds() {
    videoRef.current.currentTime -= 10;
  }

  function forward10Seconds() {
    videoRef.current.currentTime += 10;
  }

  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <>
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
      <div className={classes.modal}>
        <div className={classes["modal-content"]}>
          <video
            ref={videoRef}
            className={classes.video}
            controls={false}
            autoPlay
          >
            <source src={videoData} type="video/mp4" />
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
