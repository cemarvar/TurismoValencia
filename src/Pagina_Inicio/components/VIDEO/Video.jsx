import ReactPlayer from "react-player";

export default function Video() {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        src="https://youtu.be/nE5H5t0qjcc"
        playing = {true}
        muted = {true}
        loop = {true} 
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}


