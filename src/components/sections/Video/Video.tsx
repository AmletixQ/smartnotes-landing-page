import Play from "assets/icons/button-play.svg";
import Preview from "assets/icons/video-preview.svg";
import "./Video.scss";

const Video = () => {
  return (
    <section className="video-section">
      <img src={Preview} alt="Preview" />
      <div className="play-button">
        <img src={Play} alt="Play" />
      </div>
    </section>
  );
};

export default Video;
