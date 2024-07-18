import { io } from "socket.io-client";

const URL =
  import.meta.env.NODE_ENV === "production"
    ? ""
    : (import.meta.env.REACT_APP_SOCKET_URL as string);

const socket = io(URL);

export default socket;
