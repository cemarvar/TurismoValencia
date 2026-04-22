import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div className="video-container" style={{ position: "relative", paddingTop: "56.25%", overflow: "hidden" }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "max(100%, 124.44vh)",
        height: "100%",
      }}>
        <ReactPlayer
          src="https://youtu.be/nE5H5t0qjcc"
          playing={true}
          muted={true}
          loop={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
