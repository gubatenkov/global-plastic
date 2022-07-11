const VideoPopup = ({ videoId, onClose }) => {
  return (
    <div className="video-popup" onClick={onClose}>
      <div className="video-popup__container">
        <iframe
          className="video-popup__iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
