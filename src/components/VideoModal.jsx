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
import film from "../assets/portfolio/waran.mp4";

const VideoModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(true);
  const videoRef = useRef(null);
  // Set isPlaying to true for autoplay on open
  const [isPlaying, setIsPlaying] = useState(true);

  function closeModal(event) {
    event.stopPropagation();
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    // Ensure the video plays when modal is reopened
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

  // Use useEffect to autoplay the video when the component mounts
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
            <source src={film} type="video/mp4" />
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
