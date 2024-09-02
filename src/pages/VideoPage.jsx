import React, { useEffect, useRef } from "react";
import { io } from "socket.io-client";

const RTCPage = () => {
  const socketRef = useRef(null);
  const myVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const pcRef = useRef(null);
  const roomName = "testRoom"; // You can dynamically generate or pass this

  const getMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
        myVideoRef.current.volume = 0; // 볼륨을 0으로 설정
      }
      stream.getTracks().forEach((track) => {
        if (pcRef.current) {
          pcRef.current.addTrack(track, stream);
        }
      });

      pcRef.current.onicecandidate = (e) => {
        if (e.candidate) {
          console.log("ICE Candidate: ", e.candidate);
          socketRef.current.emit("candidate", e.candidate, roomName);
        }
      };

      pcRef.current.ontrack = (e) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = e.streams[0];
          console.log("Received remote track: ", e.streams[0]);
        }
      };
    } catch (e) {
      console.error("Error accessing media devices.", e);
    }
  };

  const createOffer = async () => {
    try {
      const offer = await pcRef.current.createOffer();
      await pcRef.current.setLocalDescription(offer);
      console.log("Created offer: ", offer);
      socketRef.current.emit("offer", offer, roomName);
    } catch (e) {
      console.error("Error creating offer: ", e);
    }
  };

  const createAnswer = async (offer) => {
    try {
      await pcRef.current.setRemoteDescription(offer);
      const answer = await pcRef.current.createAnswer();
      await pcRef.current.setLocalDescription(answer);
      console.log("Created answer: ", answer);
      socketRef.current.emit("answer", answer, roomName);
    } catch (e) {
      console.error("Error creating answer: ", e);
    }
  };

  useEffect(() => {
    socketRef.current = io(import.meta.env.VITE_RTC_SERVER, {
      transports: ["websocket"],
    });

    pcRef.current = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    socketRef.current.emit("join", roomName);

    socketRef.current.on("created", async () => {
      console.log("Room created");
      await getMedia();
    });

    socketRef.current.on("joined", async () => {
      console.log("Joined room");
      await getMedia();
      createOffer();
    });

    socketRef.current.on("offer", async (offer) => {
      console.log("Received offer: ", offer);
      await getMedia();
      createAnswer(offer);
    });

    socketRef.current.on("answer", (answer) => {
      console.log("Received answer: ", answer);
      pcRef.current.setRemoteDescription(answer);
    });

    socketRef.current.on("candidate", async (candidate) => {
      console.log("Received candidate: ", candidate);
      await pcRef.current.addIceCandidate(candidate);
    });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
      if (pcRef.current) pcRef.current.close();
    };
  }, []);

  return (
    <div>
      <h1>WebRTC Video Call</h1>
      <video ref={myVideoRef} autoPlay playsInline style={{ width: "300px" }} />
      <video
        ref={remoteVideoRef}
        autoPlay
        playsInline
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default RTCPage;
