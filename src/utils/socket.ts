import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? ""
    : (process.env.REACT_APP_SOCKET_URL as string);

const socket = io(URL);

export default socket;
