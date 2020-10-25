import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*
 * API test room
 */
function Test({ io }) {
  const { roomID } = useParams();

  const [userData, setUserData] = useState({
    id: "a",
    name: "",
    room: roomID,
  });

  useEffect(() => {
    // authentication
    io.on("auth", (_, callback) => callback(userData));
    io.on("invalid", console.error);
    io.on("update", d => {
      console.log(d);
    });

    return () => clearInterval();
  }, []);

  return (
    <div>
      <p>{userData.id}</p>
      <p>{userData.name}</p>
    </div>
  );
}

export default Test;
