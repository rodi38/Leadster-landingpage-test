import React from "react";

async function VideoComponent() {
  const res = await fetch("http://localhost:3004/videos");
  if (!res.ok) {
    throw new Error('failed to fetch');
  }

  return <div>VideoComponent</div>;
}

export default VideoComponent;
