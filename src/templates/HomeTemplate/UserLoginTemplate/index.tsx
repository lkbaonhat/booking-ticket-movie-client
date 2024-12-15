import React, { useState } from "react";

export default function UserLoginTemplate(props: any) {
  const [{ width, height }, setSize] = useState({
    width: Math.round(window.innerWidth),
    height: Math.round(window.innerHeight),
  });
  return <div></div>;
}
