import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar } from "@mui/material";

import db from "./firebase";
import { Link } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((docs) => docs.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomName = prompt("please enter name for chat");
    if (roomName) {
      // db
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, []);
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p className="sidebarChat__msg">{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h1>Add new chat</h1>
      <AddIcon />
    </div>
  );
};

export default SidebarChat;
