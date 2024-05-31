import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000/api";

const socket = io(URL);

export default socket;
