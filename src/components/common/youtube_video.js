"use client";

import YouTube from "react-youtube";

export default function YouRubeVideoComponent({ videoId }) {
  const ytOpts = {
    height: "600",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  /**
   * @param {import("react-youtube").YouTubeEvent} event
   */
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <>
      <YouTube
        className="mt50"
        videoId={videoId}
        opts={ytOpts}
        onReady={onReady}
      />
    </>
  );
}
